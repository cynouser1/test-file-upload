// models/formResponse.model.js

import mongoose from "mongoose";

const formResponseSchema = new mongoose.Schema(
  {
    formId: {
      type: mongoose.Schema.Types.ObjectId,
      // ref: "forms", // reference the form template
      required: true,
    },
    submittedBy: {
      type: mongoose.Schema.Types.ObjectId,
      // ref: "users", // optional: depends on whether users must log in
      // required: true,
      required: false,
    },
    data: {
      // type: Object,
      type: mongoose.Schema.Types.Mixed,
      required: true,
    },
    files: [{
      fieldname: String,
      filename: String,
      originalname: String,
      path: String,
      mimetype: String,
      size: Number
    }]
  },
  { timestamps: true }
);

const FormResponse = mongoose.model("formResponses", formResponseSchema);
export default FormResponse;
// module.exports = formResponse;
