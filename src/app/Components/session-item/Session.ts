
export class Session{
  public _id:string;
  public title:string;
  public description:string;
  public meetingUrl:String;
  public instructorId:string;
  public comments:string[];
  public assignmentUploads:String[];
  public createdAt:Date;
  public updatedAt:Date;

  constructor(_id,title,description,meetingUrl,instructorId,comments:string[],assignmentUploads:string[],createdAt,updatedAt) {
    this._id= _id;
    this.title =title;
    this.description =description;
    this.meetingUrl =meetingUrl;
    this.instructorId =instructorId;
    this.comments =comments;
    this.assignmentUploads=assignmentUploads;
    this.createdAt =createdAt;
    this.updatedAt =updatedAt;
  }
}
