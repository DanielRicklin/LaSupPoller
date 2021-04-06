const mongoose = require('mongoose');


// equipment: {
//       type: mongoose.Schema.Types.ObjectId,
//       required: true,
//       ref: 'Equipment',
//     }


const pingModel = mongoose.Schema(
  {
    equipment: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Equipment',
    },
    ip: {
      type: String,
      required: true,
    },
    alive: {
      type: Boolean,
    },
    latency: {
      type: String,
      required: true,
    }
  },
  {
    timestamps: true,
  }
)

const Ping = mongoose.model('Ping', pingModel)

module.exports = Ping