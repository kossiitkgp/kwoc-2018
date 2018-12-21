import csv
import os

dir_path = os.path.dirname(os.path.realpath(__file__))
root_dir = '/'.join(dir_path.split('/')[:-1])

PROJECTS_LIST = root_dir + '/gh_scraper/projects.csv'
STUDENTS_LIST = root_dir + '/gh_login/student.csv'

mentors_mailid = []
student_mailid = []
students = []

with open(PROJECTS_LIST, 'r', encoding='utf-8') as project_file:
    raw_header = csv.reader(project_file)
    header = next(raw_header, None)
    for row in raw_header:
        if row[1] not in mentors_mailid:
            mentors_mailid.append(row[1])

print(len(mentors_mailid))

with open(STUDENTS_LIST, 'r', encoding='utf-8') as student_file:
    raw_header = csv.reader(student_file)
    # header = next(raw_header, None)
    # student_writer.writerow(header)
    for row in raw_header:
        if row[1] not in mentors_mailid:
            if row[1] not in student_mailid: 
                student_mailid.append(row[1])
                students.append(list(row))

# print(students)
print(len(students))

with open(STUDENTS_LIST, "w") as new_file:
# with open(STUDENTS_LIST, "w") as new_file:
    student_writer = csv.writer(new_file, delimiter=',')
    for row in students:
        student_writer.writerow(row)
