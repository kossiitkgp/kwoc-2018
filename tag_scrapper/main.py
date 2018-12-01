import os
import csv
import requests
import json

PATH_TO_CSV = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "gh_scraper/projects.csv")
SAVE_TO = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "gh_scraper/topic_dict.json")
GITHUB_LINK_INDEX = 4  # 0 based indexing
GITHUB_GRAPHQL_ENDPOINT = "https://api.github.com/graphql"


def save_as_json(topic_dict):
    """
    takes in a dictionary of repo_url as keys and topics list as data and saves to file

    :param topic_dict: dictionary of schema {"url": [topic_list]}
    :return: True if successful, False otherwise
    """
    try:
        with open(SAVE_TO, "w") as outf:
            json.dump(topic_dict, outf)
        print("Successfully saved topic dictionary to {path}".format(path=SAVE_TO))
        return True
    except Exception as err:
        print("Failed to save file!")
        print(err)
        return False


def flatten(json_response):
    """
    flattens the json response received from graphQL, and returns the list of topics
    :param json_response: response of the format mentioned in graph_query
    :return: list of topics
    """
    topics = []
    if json_response.get("data", None) is not None:
        language_nodes = json_response["data"]["repository"]["languages"]["nodes"]
        for node in language_nodes:
            topics.append(node["name"].capitalize())
            if(len(topics) > 4):
                break     
        topic_nodes = json_response["data"]["repository"]["repositoryTopics"]["nodes"]
        for node in topic_nodes:
            topics.append(node["topic"]["name"].capitalize())
            if(len(topics) > 15):
                break
    print(len(topics))
    return topics


def graph_query(author, name):
    """
    posts a query to the github graphQL endpoint and fetches the response

    :param author: name of the owner of the repository
    :param name: name of the repository
    :return: response of the following form:

        {
          "data": {
            "repository": {
              "languages": {
                "nodes": [
                  {
                    "name": "language1"
                  },
                  {
                    "name": "language2"
                  }
                ]
              }
              "repositoryTopics": {
                "nodes": [
                  {
                    "topic": {
                      "name": "topic1"
                    }
                  },
                  {
                    "topic": {
                      "name": "topic2"
                    }
                  }
                ]
              }
            }
          }
        }

    """
    query = """
    {
      repository(owner: "%s", name: "%s") {
        languages(first: 10) {
          nodes {
            name
          }
        }
        repositoryTopics(first: 20) {
          nodes {
            topic {
              name
            }
          }
        }
      }
    }
    """ % (author, name)

    headers = {
        "Authorization": "token " + os.getenv("GITHUB_TOKEN")
    }

    resp = requests.post(GITHUB_GRAPHQL_ENDPOINT, data=json.dumps({"query": query}), headers=headers)
    # print(resp.json())
    return resp.json()


def split(url):
    """
    splits the given github url into author and name

    :param url: URL of the github repository
    :return: author (string), name (string)
    """
    url = url.split('.com/')
    url = url[1].split('/')
    return url[0], url[1].replace(".git", "")


def read_links(path_to_csv, index):
    """
    reads csv file for project links

    :param path_to_csv: path to the csv file
    :param index: index to keep data from
    :return: list of parsed data
    """
    link_list = []
    skip = True  # to skip the column headings
    with open(path_to_csv, "r") as data_file:
        parsed_data = csv.reader(data_file, delimiter=",")
        for row in parsed_data:
            if skip:
                skip = False
                continue
            link_list.append(row[index])
    return link_list

def remove_dupes(tags):
	"""
	Remove case insensitive duplicates from a list
	"""
	final_list = []
	for tag in tags:
		if not tag.lower() in [t.lower() for t in final_list]:
			final_list.append(tag)
	return final_list


def main(path_to_csv=PATH_TO_CSV, index=GITHUB_LINK_INDEX):
	"""
	driving function for scraping topics off a github repository and producing a json of the same

	The data structure topics_data (the final list of links and topics) is a dictionary of the following type
	{
		"link1": [LIST OF TOPICS],
		"link2": [LIST OF TOPICS]
	}

	:param path_to_csv: path to the csv file containing the project details
	:param index: index of the github url in the csv
	:return:
		True if successful for all, False otherwise
	"""
	link_list = read_links(path_to_csv, index)
	topics_data = {}
	to_return = True
	for link in link_list:
		try:
			author, name = split(link)
			query_response = graph_query(author, name)
			topic_list = remove_dupes( flatten(query_response) )
			# print(topic_list)
			topics_data[link] = topic_list
			print(f'done for {link}')
		except Exception as err:
			print(f'failed for {link}')
			topics_data[link] = []
			to_return = False
			print(err)

	# print(topics_data)
	save_as_json(topics_data)
	return to_return


if __name__ == "__main__":
    # print(PATH_TO_CSV)
    main()