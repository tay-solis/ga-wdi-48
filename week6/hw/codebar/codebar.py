class Member:
    def __init__(self, full_name, type, introduction):
        self.full_name = full_name
        self.introduction = introduction
        self.type = type

class Instructor(Member):
    def __init__(self, full_name, introduction, bio, skills):
        super().__init__(full_name, "Instructor", introduction)
        self.bio = bio
        self.skills = skills
    def addSkill(self, new_skill):
        self.skills.append(new_skill)
    def print_details(self):
        if len(self.skills) > 1:
            for i, skill in enumerate(self.skills):
                if i < len(self.skills) -1:
                    skillset += skill + ", "
                else:
                    skillset += "and " + skill + "."
        else:
            skillset = "just" + self.skills[0] + "."

        print("{0} My name is {1}. I am your instructor. {2}. My skills are {3}".format(self.introduction, self.full_name, self.bio, skillset))

class Student(Member):
    def __init__(self, full_name, introduction, reason):
        super().__init__(full_name, "Student", introduction)
        self.reason = reason
    def print_details(self):
        print("{0} My name is {1}. I am a student. I'm here because {2}".format(self.introduction, self.full_name, self.reason))

class Workshop:
    def __init__(self, start_date, subject):
        self.start_date = start_date
        self.subject = subject
        self.instructors = []
        self.students = []
    def add_participant(self, participant):
        if participant.type == "Instructor":
            self.instructors.append(participant)
        else:
            self.students.append(participant)
    def print_details(self):
        instructor_list = ""
        student_list = ""
        for i, instructor in enumerate(self.instructors):
            if i < len(self.instructors) -1:
                instructor_list += instructor.full_name + ", "
            else:
                instructor_list += "and " + instructor.full_name
        for i, student in enumerate(self.students):
            if i < len(self.instructors) - 1:
                student_list += student.full_name + ", "
            else:
                student_list += "and " + student.full_name
        return f"Our {self.subject} class starts {self.start_date}. It is taught by {instructor_list}. {student_list} are participating"

rc = Instructor("RC", "What's up?", "I'm a former DJ who is now a programmer and teacher.", ["HTML/CSS", "Javascript", "JS Frameworks"])
luke = Instructor("Luke", "HiiiIIIIIEEEEEE!", "I'm smarter than you and it's okay.", ["data science", "programming", "math", "management"])

jess = Student("Jessica Jessison", "Heyyyy!", "I'm here to change my own life.")
coocoo = Student("Courtney Cooper", "Hey, I guess.", "I want to make money.")

my_workshop = Workshop("01/10/19", "Computer Science")

my_workshop.add_participant(rc)
my_workshop.add_participant(luke)
my_workshop.add_participant(jess)
my_workshop.add_participant(coocoo)


print(my_workshop.print_details())
