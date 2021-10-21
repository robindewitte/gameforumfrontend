export class TopicDTO{
    constructor(
        public userName: string ="",
        public title: string ="",
        public date: Date = new Date(),
    ){}
}