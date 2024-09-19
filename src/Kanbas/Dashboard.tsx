import { Link } from "react-router-dom";

export default function Dashboard() {
  const courseId1 = "1234";
  const courseId2 = "1235";
  const courseId3 = "1236";
  const courseId4 = "1237";
  const courseId5 = "1238";
  const courseId6 = "1239";
  const courseId7 = "1240";

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
                to={`/Kanbas/Courses/${courseId1}/Home`}>
            <img src="/images/reactjs.jpg" alt="" width={200} />
            <div>
              <h5>
                 CS1234 React JS
              </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
                to={`/Kanbas/Courses/${courseId2}/Home`}>
            <img src="/images/reactjs.jpg" alt="" width={200} />
            <div>
              <h5>
                 CS1235 Python
              </h5>
              <p className="wd-dashboard-course-title">
                Software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
                to={`/Kanbas/Courses/${courseId3}/Home`}>
            <img src="/images/reactjs.jpg" alt="" width={200} />
            <div>
              <h5>
                 CS1236 Java
              </h5>
              <p className="wd-dashboard-course-title">
                Software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
                to={`/Kanbas/Courses/${courseId4}/Home`}>
            <img src="/images/reactjs.jpg" alt="" width={200} />
            <div>
              <h5>
                 CS1237 Computer Network
              </h5>
              <p className="wd-dashboard-course-title">
                Software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
                to={`/Kanbas/Courses/${courseId5}/Home`}>
            <img src="/images/reactjs.jpg" alt="" width={200} />
            <div>
              <h5>
                 CS1238 Operating System
              </h5>
              <p className="wd-dashboard-course-title">
                Software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
                to={`/Kanbas/Courses/${courseId6}/Home`}>
            <img src="/images/reactjs.jpg" alt="" width={200} />
            <div>
              <h5>
                 CS1239 Software Engineering
              </h5>
              <p className="wd-dashboard-course-title">
                Software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
                to={`/Kanbas/Courses/${courseId7}/Home`}>
            <img src="/images/reactjs.jpg" alt="" width={200} />
            <div>
              <h5>
                 CS1240 Data structure
              </h5>
              <p className="wd-dashboard-course-title">
                Software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

      </div>
    </div>
  );
}
