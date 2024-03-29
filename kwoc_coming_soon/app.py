from flask import request, render_template, Flask, redirect
import csv
import os

app = Flask(__name__, template_folder="./templates")


@app.route('/')
def main():
    return render_template('index.html')


@app.route('/submit', methods=['GET', 'POST'])
def submit():
    # if request.method == 'POST':
    #     name = request.form['name']
    #     emailid = request.form['email-id']
    #     fieldnames = [name, emailid]
    #     with open('list.csv', 'a+') as inFile:
    #         writer = csv.writer(inFile)
    #         writer.writerow(fieldnames)

    return render_template('thank.html')


@app.route("/mentor_form")
def mentor_form():
    # return "Registrations have now been closed. See you next year !"
    return render_template('mentor_form.html')


@app.route('/mentor')
def mentor():
    return redirect('/mentor_form', 302)


if __name__ == '__main__' and "RUNNING_PROD" not in os.environ:
    app.run(host='0.0.0.0', port="5000")
