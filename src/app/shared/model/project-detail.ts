export class ProjectDetail{
    status: boolean;
    sprint : ProjectContent;
}

export class ProjectContent{
    _id: string;
    projectName: string;
    projectDescription: string;
    artifacts: [];
    sprints:[];
    members: [];
    productBacklog: [];
}