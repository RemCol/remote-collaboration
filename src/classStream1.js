import React from "react";
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add';
import "./classStream1.css";
import Header from "./Header";

const classStream = () => { 
  return(
    <div>
      <Header></Header>
      <div class="class-stream">
        <h2>Mathematics Class Stream</h2>
        <div class="row">
          <div class="col-md-3">

            <div class="task-container">
              <div>
              <h4>Vector Diagram Initiation Project</h4>
              </div>
              <div>
                  <h5>
                    -Make A team consisting of 5 people<br></br>
                    -Make a Vector diagram of the whole Campus<br></br>
                    -You are to measure everything by ruler only<br></br>
                    -Statistics are forbidden to use!<br></br>
                    @.@
                  </h5>
              </div>
              <div>
                  <h6>Date Issued:09/12/2023<br></br>Due Date : 10/12/2023 </h6>
              </div>
              <div class ="taskdetails">
                <button type="button" class="btn btn-primary" title="Submit Task" onclick= "document.location='pages/1class-details.html'"><i class="fa fa-book">Submit</i></button>
                <button type="button" class="btn btn-primary" title="report this teacher.." onclick= "document.location='pages/1class-details.html'"><i class="fa fa-book">Report</i></button>
                <button type="button" class="btn btn-primary" title="Comment on this task.." onclick= "document.location='pages/1class-details.html'"><i class="fa fa-book">Comment</i></button>
              </div>
            </div>

            <div class="task-container">
              <div>
              <h4>Mathematics "Video" Project</h4>
              </div>
              <div>
                  <h5>Make a video of yourself counting from 1 all the way to 9^3 ! </h5>
              </div>
              <div>
                  <h6>Date Issued:09/12/2023<br></br>Due Date : 10/12/2023 </h6>
              </div>
              <div class ="taskdetails">
                <button type="button" class="btn btn-primary" title="Submit Task" onclick= "document.location='pages/1class-details.html'"><i class="fa fa-book">Submit</i></button>
                <button type="button" class="btn btn-primary" title="Report Abuse" onclick= "document.location='pages/1class-details.html'"><i class="fa fa-book">Report</i></button>
                <button type="button" class="btn btn-primary" title="Add Class Comment" onclick= "document.location='pages/1class-details.html'"><i class="fa fa-book">Comment</i></button>
              </div>
            </div>

            <div class="task-container">
              <div>
              <h4>Task Title</h4>
              </div>
              <div>
                  <h5>Task Details.....</h5>
              </div>
              <div>
                  <h6>Date Issued:09/12/2023<br></br>Due Date : 10/12/2023 </h6>
              </div>
              <div class ="taskdetails">
                <button type="button" class="btn btn-primary" title="Submit Task" onclick= "document.location='pages/1class-details.html'"><i class="fa fa-book">Submit</i></button>
              </div>
            </div>

            <div class="task-container">
              <div>
              <h4>Task Title</h4>
              </div>
              <div>
                  <h5>Task Details......</h5>
              </div>
              <div>
                  <h6>Date Issued:09/12/2023<br></br>Due Date : 10/12/2023 </h6>
              </div>
              <div class ="taskdetails">
                <button type="button" class="btn btn-primary" title="Submit Task" onclick= "document.location='pages/1class-details.html'"><i class="fa fa-book">Submit</i></button>
              </div>
            </div>

            <div class="task-container">
              <div>
              <h4>Task Title</h4>
              </div>
              <div>
                  <h5>Task Details....</h5>
              </div>
              <div>
                  <h6>Date Issued:09/12/2023<br></br>Due Date : 10/12/2023 </h6>
              </div>
              <div class ="taskdetails">
                <button type="button" class="btn btn-primary" title="Submit Task" onclick= "document.location='pages/1class-details.html'"><i class="fa fa-book">Submit</i></button>
              </div>
            </div>

          </div>
        </div>
      </div>
      <a href="http://localhost:3001">
        <Fab
          variant="extended"
          size="medium"
          color="primary"
          aria-label="add"
          style={{position: "fixed", bottom: 10, right: 10}}
        >
          <AddIcon /> Open Whiteboard
        </Fab>
    </div>
  );
}

export default classStream;