export class Task {
  user_story_id:string
  task_id: string;
  task_details: string;
  volunteer: string;
  initial_effort_estimate: number;
  modifiedBy: string;
  modifiedAt: string;
  stat: string;
  efforts_remaining: number;
}



export class Sprint {
  _id: string;
  createdOn: number;
  noOfDays: number;
  sprintDescription: String;
  sprintName: String;
  stories: Task[];

  constructor(response?: Sprint) {
    if (response != null) {
      this._id = response._id;
      this.createdOn = response.createdOn;
      this.noOfDays = response.noOfDays;
      this.sprintName = response.sprintName;
      this.sprintDescription = response.sprintDescription;
      this.stories = response.stories;
    }
  }

  getStories() {
    return this.stories;
  }
}

  // export const stories: Userstory[] = [
  //   {
  //     user_story_id: "US001",
  //     task: [
  //       {
  //         task_id: "Task1",
  //         task_details: "Take measurements of white shirt (cut the parts)",
  //         volunteer: "Preetha",
  //         initial_effort_estimate: 10,
  //         modifiedBy: "",
  //         modifiedAt: "2019-07-10T09:49:23.897Z",
  //         stat: "to-do",
  //         efforts_remaining: 10
  //       },
  //       {
  //         task_id: "Task2",
  //         task_details: "Take measurements of white shirt (cut the parts)",
  //         volunteer: "Preetha",
  //         initial_effort_estimate: 10,
  //         modifiedBy: "",
  //         modifiedAt: "2019-07-10T09:49:23.897Z",
  //         stat: "in-progress",
  //         efforts_remaining: 6
  //       }
  //     ]
  //   },
  //   {
  //     user_story_id: "US002",
  //     task: [
  //       {
  //         task_id: "Task1",
  //         task_details: "Take measurements of white shirt (cut the parts)",
  //         volunteer: "Preetha",
  //         initial_effort_estimate: 10,
  //         modifiedBy: "",
  //         modifiedAt: "2019-07-10T09:49:23.897Z",
  //         stat: "to-do",
  //         efforts_remaining: 10
  //       },
  //       {
  //         task_id: "Task2",
  //         task_details: "Take measurements of white shirt (cut the parts)",
  //         volunteer: "Preetha",
  //         initial_effort_estimate: 10,
  //         modifiedBy: "",
  //         modifiedAt: "2019-07-10T09:49:23.897Z",
  //         stat: "completed",
  //         efforts_remaining: 0
  //       }
  //     ]
  //   },
  // ]


