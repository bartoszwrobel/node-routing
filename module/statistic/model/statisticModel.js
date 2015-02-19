var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var StatisticSchema = new Schema(
        {
            name: String,
            owner: Schema.Types.ObjectId,
            queries: [Schema.Types.Mixed],
            repository: String,
            result: [Schema.Types.Mixed],
            reportType: String,
            calculate: Number,
            compare: Boolean,
            lastCalculate: Date
        },
{
    collection: 'statistic'
}
);

module.exports = mongoose.model('Statistic', StatisticSchema);