import { mongoose } from "../data/data";

const applicationSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    emailAddress: String,
    phone: String,
    timeToCall: Date,
    skypeId: String,
    service: String,
    revenue: Number,
    invest: Number,
    happy: String,
    business: String,
    requirements: String
});

const Application = mongoose.model('Application', applicationSchema);

export {
    Application
}
