class Member:
    def __init__(self, full_name, introduction, is_student, reason, bio, skills):
        self.full_name = full_name
        self.introduction = introduction
        self.is_student = is_student
        self.reason = reason
        self.bio = bio
        self.skills = skills
    def addSkill(self, new_skill):
        self.skills.append(new_skill)
    def printInsides(self):
        amI = "student"
        if self.is_student:
            amI = "teacher"
        skillset = ""
        if len(self.skills) > 1:
            for i, skill in enumerate(self.skills):
                if i < len(self.skills) -1:
                    skillset += skill + ", "
                else:
                    skillset += "and " + skill + "."
        else:
            skillset = "just" + self.skills[0] + "."

        print("{0} My name is {1}. I am a {2}. I'm taking this course because {3}. {4}. My skills are {5}".format(self.introduction, self.full_name, amI, self.reason, self.bio, skillset))

brienne = Member("Brienne Solis", "Hi, I guess.", True, "I want to make that $$$, yknow?", "Someday I'll be an ABG", ["statistics", "math in general"])
brienne.addSkill("Python")
brienne.printInsides()
