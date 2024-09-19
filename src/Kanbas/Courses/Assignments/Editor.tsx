export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <br />
      <br />
      <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />

      <textarea id="wd-description" style={{ width: "350px", height: "150px" }}>
        The assignment is available online Submit a link to the landing page of your web application running on Netlify. The landing page should include the following:
        Your full name and section
        Links to each of the lab assignments
        Link to the Kanbas application
        Links to all relevant source code repositories
        The Kanbas application should include a link to navigate back to the landing page.
      </textarea>
      <br />
      <br />
      <table>
        {/* Points Input */}
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" type="number" value={100} />
          </td>
        </tr>
        <br />
        {/* Assignment Group */}
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-group">Assignment Group</label>
          </td>
          <td>
            <select id="wd-group">
              <option>ASSIGNMENTS</option>
            </select>
          </td>
        </tr>
        <br />

        {/* Display Grade As */}
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-display-grade-as">Display Grade as</label>
          </td>
          <td>
            <select id="wd-display-grade-as">
              <option>Percentage</option>
            </select>
          </td>
        </tr>
        <br />

        {/* Submission Type */}
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-submission-type">Submission Type</label>
          </td>
          <td>

            <select id="wd-submission-type">
              <option>Online</option>
            </select>
          </td>
        </tr>
        <br />

        {/* Online Entry Options */}
        <tr>
          <td align="right" valign="top">Online Entry Options</td>

          <td>
            <label>
              <input id="wd-text-entry" type="checkbox" />
              Text Entry
            </label><br />
            <label>
              <input id="wd-website-url" type="checkbox" />
              Website URL
            </label><br />
            <label>
              <input id="wd-media-recordings" type="checkbox" />
              Media Recordings
            </label><br />
            <label>
              <input id="wd-student-annotation" type="checkbox" />
              Student Annotation
            </label><br />
            <label>
              <input id="wd-file-upload" type="checkbox" />
              File Uploads
            </label>
          </td>
        </tr>

        {/* Assign To */}
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-assign-to">Assign to</label>
          </td>
          <td>
            <input id="wd-assign-to" type="text" value={"Everyone"} />
          </td>
        </tr>

        {/* Due Date */}
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-due-date">Due</label>
          </td>
          <td>
            <input id="wd-due-date" type="date" value="2024-05-13" />
          </td>
        </tr>

        {/* Available From */}
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-available-from">Available from</label>
          </td>
          <td>
            <input id="wd-available-from" type="date" value="2024-05-06" />
          </td>
        </tr>

        {/* Available Until */}
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-available-until">Until</label>
          </td>
          <td>
            <input id="wd-available-until" type="date" value="2024-05-20" />
          </td>
        </tr>
      </table>

      <br />
      <button>Save</button>
      <button>Cancel</button>
    </div>
  );
}
