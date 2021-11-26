export class ResponseDTO{
    constructor(
        public topicTitle:string = "",
        public userName:string = "",
        public timeOfPosting:Date = new Date(),
        public content:string = "",
        public topicSubject:string = "",
    ){}
}