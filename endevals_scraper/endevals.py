import pandas as pd
import numpy as np 
import json

def get_mentor_eval():
    # First we store the data of the pass sheets in dataframe
    # Then we search for the data in evaluation column, and parse the students with fail credentials
    # We can store the github id as a unique key to identify the names in the stats.json, and remove them
    
    data_df = pd.read_csv('kwoc.csv')
    data_df.fillna('NAN', inplace=True)

    # Store the pass and fail students in separate array, along with the details of the student
    evaluation = data_df['evaluation']
    evaluation = evaluation.str.split('\n')
    pass_fail = list()
    for students in evaluation:
        for student in students:
            pass_fail.append(student)

    # Filter the data with removal of '' and NAN values
    pass_fail = [i for i in pass_fail if i is not '']
    pass_fail = [i for i in pass_fail if i is not 'NAN']

    # To remove the trailing \r in from the end
    pass_fail_new = [i.split('\r')[0] if i.endswith('\r') else i for i in pass_fail]
    pass_fail_set = set()
    
    # To remove duplicate data
    pass_fail_set = {i for i in pass_fail_new}

    # Now we can store the github id and status in a dictionary

    pass_fail_dict = dict()
    for student in pass_fail_set:
        gid, status = student.split(' ')[0], student.split(' ')[-1]
        pass_fail_dict[gid] = status

    # print(len(pass_fail_dict))

    return pass_fail_dict

def filter_students():
    '''
    This function takes in the pass_fail_dict, and filters out students as follows - 
    Students who are passed in mentor evaluation are included new_passed_dict
    Students who have failed are explicitly removed from the statistics
    Students who haven't received any mentor evaluation, but have \
    submitted atleast 1 pr(open or closed) or submitted atleast 1 commit,
    are included
    '''

    # Get the dictionary of mentor passed students, and old frozen stats dictionary
    pass_fail_dict = get_mentor_eval()
    old_data = dict()
    with open('stats.json') as json_file:
        old_data = json.load(json_file)

    new_data = dict()
    # First we add the students who are in pass_fail_dict
    for gid, details in old_data.items():
        try:
            if pass_fail_dict[gid] == 'PASS':
                new_data[gid] = details
        except KeyError:
            pass
    
    # Then we remove students who are explicitly failed
    for gid, details in list(old_data.items()):
        try:
            if pass_fail_dict[gid] == 'FAIL':
                del old_data[gid]
        except KeyError:
            pass

    # Now we add students who have submitted atleast 1 pr(open or closed) or submitted atleast 1 commit
    for gid, details in old_data.items():
        if (details['no_of_commits']!=0 or details['pr_open']!=0 or details['pr_closed']!=0):
            new_data[gid] = details

    # print(len(new_data))

    with open('new_stats.json', 'w') as json_file:
        json.dump(new_data, json_file)






if __name__ == "__main__":
    filter_students()



    

    
