export class Story {
    acceptance_criteria: string;
    description: string;
    story_number: string;
}


export class Features {
    feature: String;
    story: Story[];
}


export class ProductBacklog {
    _id: string;
    pbName: string;
    pbDescription: string;
    noOfDays: number;
    features: Features[];
    createdOn: string;



    constructor(response?: ProductBacklog) {
  
        if (response != null) {
            this._id = response._id;
            this.pbName = response.pbName;
            this.pbDescription = response.pbDescription;
            this.noOfDays = response.noOfDays;
            this.createdOn = response.createdOn;
            this.features = response.features;
        }
    }

    getFeatures() {
        return this.features;
    }

}




