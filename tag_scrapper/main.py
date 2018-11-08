import os
import csv
import requests
from bs4 import BeautifulSoup

PATH_TO_CSV = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "gh_scraper/projects.csv")
GITHUB_LINK_INDEX = 4  # 0 based indexing
LINK_INDEX = 0  # index of url in the final list
TOPICS_INDEX = 1  # index of topics list in the final list


def get_topics(anchor_tag_list):
    """
    scrapes the topics off the given anchor tags
    :param anchor_tag_list: list of anchor tags and their enclosing contents
    :return: list of topics in the tags
    """
    topic_list = []
    for tag in anchor_tag_list:
        topic_list.append("".join(tag.text.split()))

    return topic_list


def get_anchors(page):
    """
    beautifies HTML page and separates the concerned portion(s) of the
    :param page: html page parsed from requests
    :return: list of portions of beautified html page
    """
    beautified = BeautifulSoup(page, "html.parser")
    anchor_list = []
    for line in beautified.find_all('a', attrs={"class": "topic-tag topic-tag-link"}):
        anchor_list.append(line)
    return anchor_list


def get_page(url):
    """
    fetches html page for the given URL

    :param url: link to the page
    :return: parsed HTML content for the url
    """
    resp = requests.get(url)
    if resp.status_code != 200:
        raise Exception
    return resp.content


def read_links(path_to_csv, index):
    """
    reads csv file for project links

    :param path_to_csv: path to the csv file
    :param index: index to keep data from
    :return: list of list of parsed data
    """
    link_list = []
    skip = True  # to skip the column headings
    with open(path_to_csv, "r") as data_file:
        parsed_data = csv.reader(data_file, delimiter=",")
        for row in parsed_data:
            if skip:
                skip = False
                continue
            link_list.append([row[index]])
    return link_list


def main(path_to_csv=PATH_TO_CSV, index=GITHUB_LINK_INDEX):
    """
    driving function for scraping topics off a github repository and producing a json of the same

    The data structure link_list (the final list of links and topics) is a list of the following type
    [[LINK1, [TOPIC11, TOPIC12]],[LINK2, [TOPIC21, TOPIC22]]]

    :param path_to_csv: path to the csv file containing the project details
    :param index: index of the github url in the csv
    :return:
        True if successful for all, False otherwise
    """
    link_list = read_links(path_to_csv, index)
    to_return = True
    for link in link_list:
        try:
            # print(link[0])
            page = get_page(link[0])
            anchor_tag_content = get_anchors(page)
            topic_list = get_topics(anchor_tag_content)
            # print(topic_list)
            link.append(topic_list)
            print(f'done for {link[0]}')
        except Exception as err:
            print(f'failed for {link[0]}')
            to_return = False
            print(err)
    print(link_list)
    return to_return


if __name__ == "__main__":
    # print(PATH_TO_CSV)
    main()
