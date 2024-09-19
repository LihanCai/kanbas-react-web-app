import React from 'react';
import './Status.css'; // 确保你的 CSS 文件导入了

export default function CourseStatus() {
    return (
        <div id="wd-course-status">
            <h2>Course Status</h2>
            <div className="button-group">
                <button>Unpublish</button>
                <button>Publish</button>
                <button>Import Existing Content</button>
                <button>Import from Commons</button>
                <button>Choose Home Page</button>
                <button>View Course Stream</button>
                <button>New Announcement</button>
                <button>New Analytics</button>
                <button>View Course Notifications</button>
            </div>
        </div>
    );
}
