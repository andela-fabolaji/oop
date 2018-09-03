const Course = function (title, code, unit, studentId) {
  this.code = code;
  this.title = title;
  this.unit = unit;
  this.studentId = studentId;
  this.grade = '';
};

const CourseManager = (function () {
  const graders = {};
  const CourseManager = function () {
    this.courses = [];
  };

  CourseManager.prototype.registerCourse = function (title, code, unit, studentId) {
    const course = new Course(title, code, unit, studentId);
    this.courses.push(course);
    return course;
  };

  CourseManager.prototype.listCourses = function () {
    return this.courses.length > 0 ? this.courses : 'We currently have no registered courses';
  };

  CourseManager.prototype.findCourse = function (code, studentId) {
    return this.courses.find(function(course) {
      if (course.code === code && course.studentId === studentId) {
        return course;
      }
    });
  };

  CourseManager.prototype.registerGrader = function (name, graderFn) {
    graders[name] = graderFn;
  };

  CourseManager.prototype.gradeCourse = function (code, studentId, score, gradeType) {
    const course = this.findCourse(code, studentId);
    const grader = graders[gradeType];
    course.grade = grader(score);
    this.updateCourse(course);
    return course;
  };

  CourseManager.prototype.updateCourse = function (updatedCourse) {
    const filtered = this.courses.filter(function(course) {
      return course.code !== updatedCourse.code;
    });
    this.courses = [].concat(filtered, updatedCourse);
  };

  return CourseManager;
}());

const britishGradingSystem = function(score) {
  if (score >= 0 && score <= 40) {
      return 'C';
  }

  if (score >= 41 && score <= 70) {
    return 'B';
  }

  if (score > 70) {
    return 'A';
  }
};

const americanGradingSystem = function(score) {
  if (score >= 0 && score <= 29) {
      return 'E';
  }

  if (score >= 30 && score <= 44) {
    return 'D';
  }

  if (score >= 45 && score <= 54) {
      return 'C';
  }

  if (score >= 55 && score <= 69) {
    return 'B';
  }

  if (score > 70) {
    return 'A';
  }
}