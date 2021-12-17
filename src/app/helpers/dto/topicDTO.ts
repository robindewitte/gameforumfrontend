export class TopicDTO{
    constructor(
        public userName: string ="",
        public title: string ="",
        public timeOfPosting: Date = new Date(),
        public subject: string = "",
    ){}
}