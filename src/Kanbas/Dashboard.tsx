import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/1234/Home">
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
                to="/Kanbas/Courses/1235/Home">
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
                to="/Kanbas/Courses/1236/Home">
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
                to="/Kanbas/Courses/1237/Home">
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
                to="/Kanbas/Courses/1238/Home">
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
                to="/Kanbas/Courses/1239/Home">
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
                to="/Kanbas/Courses/1240/Home">
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

        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/1241/Home">
            <img src="/images/reactjs.jpg" alt="" width={200} />
            <div>
              <h5>
                 CS1241 Principles of Database System
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
