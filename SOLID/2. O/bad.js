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
      if (course.code === code && course.studentId == studentId) {
        return course;
      }
    });
  };

  CourseManager.prototype.gradeCourse = function (code, studentId, score) {
    const course = this.findCourse(code, studentId);
    if (score >= 0 && score <= 40) {
      course.grade = 'C';
    }

    if (score >= 41 && score <= 70) {
      course.grade = 'B';
    }

    if (score > 70) {
      course.grade = 'A';
    }
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