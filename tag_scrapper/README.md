## Instructions To Use Tag-Scrapper

Tag scrapper uses Github APIv4, which is based on GraphQL. An authentication
token is required for the use of the script. Follow the below steps to run
the script

```
# Create an environment variable "GITHUB_TOKEN" for auth-token with scope repo:public
$ cd /to/project/root
$ pipenv shell --three
$ pipenv shell install --dev
# supply the .csv file and set it's path (and index of repository URL) inside the script
$ python3 tag_scrapper/main.py
```

## Using The Output

Save the output, which is a dictionary of the following schema, to a JSON file and use it.
```
{
    "repo_url_1": [topic1, topic2],
    "repo_url_2": [topic1, topic2]
}
```