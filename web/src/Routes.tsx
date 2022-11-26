// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route } from '@redwoodjs/router'

import GroupsMenuLayout from 'src/layouts/GroupsMenuLayout/GroupsMenuLayout'
import ScaffoldLayout from 'src/layouts/ScaffoldLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={GroupsMenuLayout}>
        <Route path="/" page={HomePage} name="home" />
        <Route path="/group/{id}" page={GroupPage} name="group" />
        <Route path="/student/{id}" page={StudentPage} name="student" />
      </Set>
      <Set wrap={ScaffoldLayout} title="SemGrades" titleTo="semGrades" buttonLabel="New SemGrade" buttonTo="newSemGrade">
        <Route path="/sem-grades/new" page={SemGradeNewSemGradePage} name="newSemGrade" />
        <Route path="/sem-grades/{id}/edit" page={SemGradeEditSemGradePage} name="editSemGrade" />
        <Route path="/sem-grades/{id}" page={SemGradeSemGradePage} name="semGrade" />
        <Route path="/sem-grades" page={SemGradeSemGradesPage} name="semGrades" />
      </Set>
      <Set wrap={ScaffoldLayout} title="LaboratoryWorkGrades" titleTo="laboratoryWorkGrades" buttonLabel="New LaboratoryWorkGrade" buttonTo="newLaboratoryWorkGrade">
        <Route path="/laboratory-work-grades/new" page={LaboratoryWorkGradeNewLaboratoryWorkGradePage} name="newLaboratoryWorkGrade" />
        <Route path="/laboratory-work-grades/{id}/edit" page={LaboratoryWorkGradeEditLaboratoryWorkGradePage} name="editLaboratoryWorkGrade" />
        <Route path="/laboratory-work-grades/{id}" page={LaboratoryWorkGradeLaboratoryWorkGradePage} name="laboratoryWorkGrade" />
        <Route path="/laboratory-work-grades" page={LaboratoryWorkGradeLaboratoryWorkGradesPage} name="laboratoryWorkGrades" />
      </Set>
      <Set wrap={ScaffoldLayout} title="ControlWorkGrades" titleTo="controlWorkGrades" buttonLabel="New ControlWorkGrade" buttonTo="newControlWorkGrade">
        <Route path="/control-work-grades/new" page={ControlWorkGradeNewControlWorkGradePage} name="newControlWorkGrade" />
        <Route path="/control-work-grades/{id}/edit" page={ControlWorkGradeEditControlWorkGradePage} name="editControlWorkGrade" />
        <Route path="/control-work-grades/{id}" page={ControlWorkGradeControlWorkGradePage} name="controlWorkGrade" />
        <Route path="/control-work-grades" page={ControlWorkGradeControlWorkGradesPage} name="controlWorkGrades" />
      </Set>
      <Set wrap={ScaffoldLayout} title="ModuleGrades" titleTo="moduleGrades" buttonLabel="New ModuleGrade" buttonTo="newModuleGrade">
        <Route path="/module-grades/new" page={ModuleGradeNewModuleGradePage} name="newModuleGrade" />
        <Route path="/module-grades/{id}/edit" page={ModuleGradeEditModuleGradePage} name="editModuleGrade" />
        <Route path="/module-grades/{id}" page={ModuleGradeModuleGradePage} name="moduleGrade" />
        <Route path="/module-grades" page={ModuleGradeModuleGradesPage} name="moduleGrades" />
      </Set>
      <Set wrap={ScaffoldLayout} title="LaboratoryWorks" titleTo="laboratoryWorks" buttonLabel="New LaboratoryWork" buttonTo="newLaboratoryWork">
        <Route path="/laboratory-works/new" page={LaboratoryWorkNewLaboratoryWorkPage} name="newLaboratoryWork" />
        <Route path="/laboratory-works/{id}/edit" page={LaboratoryWorkEditLaboratoryWorkPage} name="editLaboratoryWork" />
        <Route path="/laboratory-works/{id}" page={LaboratoryWorkLaboratoryWorkPage} name="laboratoryWork" />
        <Route path="/laboratory-works" page={LaboratoryWorkLaboratoryWorksPage} name="laboratoryWorks" />
      </Set>
      <Set wrap={ScaffoldLayout} title="ControlWorks" titleTo="controlWorks" buttonLabel="New ControlWork" buttonTo="newControlWork">
        <Route path="/control-works/new" page={ControlWorkNewControlWorkPage} name="newControlWork" />
        <Route path="/control-works/{id}/edit" page={ControlWorkEditControlWorkPage} name="editControlWork" />
        <Route path="/control-works/{id}" page={ControlWorkControlWorkPage} name="controlWork" />
        <Route path="/control-works" page={ControlWorkControlWorksPage} name="controlWorks" />
      </Set>
      <Set wrap={ScaffoldLayout} title="Modules" titleTo="modules" buttonLabel="New Module" buttonTo="newModule">
        <Route path="/modules/new" page={ModuleNewModulePage} name="newModule" />
        <Route path="/modules/{id}/edit" page={ModuleEditModulePage} name="editModule" />
        <Route path="/modules/{id}" page={ModuleModulePage} name="module" />
        <Route path="/modules" page={ModuleModulesPage} name="modules" />
      </Set>
      <Set wrap={ScaffoldLayout} title="Subjects" titleTo="subjects" buttonLabel="New Subject" buttonTo="newSubject">
        <Route path="/subjects/new" page={SubjectNewSubjectPage} name="newSubject" />
        <Route path="/subjects/{id}/edit" page={SubjectEditSubjectPage} name="editSubject" />
        <Route path="/subjects/{id}" page={SubjectSubjectPage} name="subject" />
        <Route path="/subjects" page={SubjectSubjectsPage} name="subjects" />
      </Set>
      <Set wrap={ScaffoldLayout} title="Courses" titleTo="courses" buttonLabel="New Course" buttonTo="newCourse">
        <Route path="/courses/new" page={CourseNewCoursePage} name="newCourse" />
        <Route path="/courses/{id}/edit" page={CourseEditCoursePage} name="editCourse" />
        <Route path="/courses/{id}" page={CourseCoursePage} name="course" />
        <Route path="/courses" page={CourseCoursesPage} name="courses" />
      </Set>
      <Set wrap={ScaffoldLayout} title="AcademicPlans" titleTo="academicPlans" buttonLabel="New AcademicPlan" buttonTo="newAcademicPlan">
        <Route path="/academic-plans/new" page={AcademicPlanNewAcademicPlanPage} name="newAcademicPlan" />
        <Route path="/academic-plans/{id}/edit" page={AcademicPlanEditAcademicPlanPage} name="editAcademicPlan" />
        <Route path="/academic-plans/{id}" page={AcademicPlanAcademicPlanPage} name="academicPlan" />
        <Route path="/academic-plans" page={AcademicPlanAcademicPlansPage} name="academicPlans" />
      </Set>
      <Set wrap={ScaffoldLayout} title="Departments" titleTo="departments" buttonLabel="New Department" buttonTo="newDepartment">
        <Route path="/departments/new" page={DepartmentNewDepartmentPage} name="newDepartment" />
        <Route path="/departments/{id}/edit" page={DepartmentEditDepartmentPage} name="editDepartment" />
        <Route path="/departments/{id}" page={DepartmentDepartmentPage} name="department" />
        <Route path="/departments" page={DepartmentDepartmentsPage} name="departments" />
      </Set>
      <Set wrap={ScaffoldLayout} title="Faculties" titleTo="faculties" buttonLabel="New Faculty" buttonTo="newFaculty">
        <Route path="/faculties/new" page={FacultyNewFacultyPage} name="newFaculty" />
        <Route path="/faculties/{id}/edit" page={FacultyEditFacultyPage} name="editFaculty" />
        <Route path="/faculties/{id}" page={FacultyFacultyPage} name="faculty" />
        <Route path="/faculties" page={FacultyFacultiesPage} name="faculties" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
