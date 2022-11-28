// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route, Private } from '@redwoodjs/router'

import GroupsMenuLayout from 'src/layouts/GroupsMenuLayout/GroupsMenuLayout'

import NavBarLayout from './layouts/NavBarLayout/NavBarLayout'

const Routes = () => {
  return (
    <Router>
      <Route path="/login" page={LoginPage} name="login" />
      <Route path="/signup" page={SignupPage} name="signup" />
      <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
      <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
      <Set wrap={NavBarLayout}>
        <Private unauthenticated="/" roles={'TEACHER'}>
          <Route path="/teacher" page={TeacherPage} name="teacher" />
        </Private>

        <Set private unauthenticated="login" wrap={GroupsMenuLayout}>
          <Route path="/" page={HomePage} name="home" />

          <Route path="/group/{id}" page={GroupPage} name="group" />
          <Route path="/group/{groupId}/subject/{subjectId}" page={SubjectPage} name="subject" />

          <Route path="/student/{id}" page={StudentPage} name="student" />
        </Set>
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
