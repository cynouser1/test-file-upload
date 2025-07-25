import Form from "../models/Form.js";
import User from "../models/User.js";
import FormResponse from "../models/formResponse.js";

export const getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select("-password");
    if (!user)
      return res
        .status(404)
        .json({ message: "User not found", success: false });

    res.status(200).json({
      message: "Profile fetched Successfully",
      data: user,
      success: true,
    });
  } catch (err) {
    console.error("Get Profile Error:", err);
    res.status(500).json({ message: "Server error", success: false });
  }
};

// submit formResponse fixed one
// export const submitFormResponse = async (req, res) => {
//   const { formId } = req.params;
//   const { formData } = req.body;
//   // const userId = req.user?._id || null; // from auth middleware if user is logged in
//   const userId = req.user ? req.user._id : null // from auth middleware if user is logged in

//   console.log("formData in submitFormResponse:", formData);
//   if (!formData) {
//     return res
//       .status(400)
//       .json({ message: "Form data is required", success: false });
//   }
//   try {
//     // Find the form by ID
//     const form = await
//       Form.findOne({ _id: formId, published: true }).populate("userId", "-password");
//     if (!form) {
//       return res.status(404).json({
//         message: "Form not found or not published",
//         success: false,
//       });
//     }

//     if (form.expiresAt && new Date() > form.expiresAt) {
//       return res.status(410).json({ success: false, message: "Form has expired" });
//     }

//     if (form.loginRequired && !userId) {
//       return res.status(401).json({ success: false, message: "Login required to submit this form" });
//     }
//     console.log("form", form);
//     console.log("req.user._id ", userId);
//     // return ;
//     // Create a new response object
//     const response = new FormResponse({
//       formId: form._id,
//       // userId: req.user._id,
//       submittedBy: userId, // allow anonymous if allowed
//       data: formData,
//     });
//     // Save the response
//     await response.save();
//     res.status(201).json({
//       message: "Form response submitted successfully",
//       data: response,
//       success: true,
//     });
//   } catch (error) {
//     console.error("Submit Form Response Error:", error);
//     res.status(500).json({ message: "Server error", error, success: false });
//   }
// };

// submit formResponse by windsurf
export const submitFormResponse = async (req, res) => {
  const { formId } = req.params;
  const userId = req.user?._id || null;

  try {
    // Process files
    const processedFiles = {};
    if (req.files && req.files.length > 0) {
      req.files.forEach((file) => {
        if (!processedFiles[file.fieldname]) {
          processedFiles[file.fieldname] = [];
        }
        processedFiles[file.fieldname].push({
          filename: file.filename,
          originalname: file.originalname,
          path: file.path,
          dbpath: `/uploads/${file.filename}`,
          mimetype: file.mimetype,
          size: file.size,
        });
      });
    }

    console.log("req.body inside before saving", req.body);
    console.log("processedFiles inside before saving", processedFiles);

    // Combine form data and file data
    const formData = { ...req.body, ...processedFiles };

    // Rest of your existing code...
    const response = new FormResponse({
      formId: formId,
      submittedBy: userId,
      data: formData,
    });

    await response.save();
    res.status(201).json({
      message: "Form response submitted successfully",
      data: response,
      success: true,
    });
    // ...
  } catch (error) {
    // Error handling
    console.error("Submit Form Response Error:", error);
    res.status(500).json({ message: "Server error", error, success: false });
  }
};

// fixing for file upload and formData handling
// export const submitFormResponse = async (req, res) => {
//   const { formId } = req.params;
//   const userId = req.user ? req.user._id : null // from auth middleware if user is logged in

//   console.log("req.body:", req.body);
//   console.log("req.files:", req.files);
//   console.log("req.user:", req.user);

//   // Step 1: Clone req.body into formData
//   const formData = { ...req.body };

//   // Step 2: Parse stringified JSON fields (like 'position')
//   Object.keys(formData).forEach((key) => {
//     try {
//       const parsed = JSON.parse(formData[key]);
//       if (typeof parsed === "object") {
//         formData[key] = parsed;
//       }
//     } catch (err) {
//       // Field is not JSON, keep as-is
//     }
//   });

//   // Step 3: Attach file paths
//   if (req.files) {
//     req.files.forEach((file) => {
//       const key = file.fieldname;

//       if (formData[key]) {
//         // If field already exists, convert to array
//         if (!Array.isArray(formData[key])) {
//           formData[key] = [formData[key]];
//         }
//         formData[key].push(file.path);
//       } else {
//         formData[key] = file.path;
//       }
//     });
//   }

//   // Step 4: Validate required data
//   if (!formData) {
//     return res
//       .status(400)
//       .json({ message: "Form data is required", success: false });
//   }
//   try {
//     // Step 5: Fetch the form
//     // Find the form by ID
//     const form = await
//       Form.findOne({ _id: formId, published: true }).populate("userId", "-password");
//     if (!form) {
//       return res.status(404).json({
//         message: "Form not found or not published",
//         success: false,
//       });
//     }

//     if (form.expiresAt && new Date() > form.expiresAt) {
//       return res.status(410).json({ success: false, message: "Form has expired" });
//     }

//     if (form.loginRequired && !userId) {
//       return res.status(401).json({ success: false, message: "Login required to submit this form" });
//     }
//     console.log("form", form);

//     // Construct formData dynamically
//     const newformData = { ...req.body };

//     // Handle file fields
//     // if (req.files && req.files.length > 0) {
//     //   req.files.forEach((file) => {
//     //     const key = file.fieldname;
//     //     const filePath = file.path;

//     //     if (formData[key]) {
//     //       // If already exists, make it an array
//     //       if (!Array.isArray(formData[key])) {
//     //         formData[key] = [formData[key]];
//     //       }
//     //       formData[key].push(filePath);
//     //     } else {
//     //       formData[key] = filePath;
//     //     }
//     //   });
//     // }
//     // if (req.files) {
//     //   req.files.forEach((file) => {
//     //     const key = file.fieldname;

//     //     if (formData[key]) {
//     //       if (!Array.isArray(formData[key])) {
//     //         formData[key] = [formData[key]];
//     //       }
//     //       formData[key].push(file.path);
//     //     } else {
//     //       formData[key] = file.path;
//     //     }
//     //   });
//     // }

//     // Create a new response object
//     const response = new FormResponse({
//       formId: form._id,
//       // userId: req.user._id,
//       submittedBy: userId, // allow anonymous if allowed
//       data: formData,
//     });
//     console.log("response with path ", response);
//     // Save the response
//     await response.save();
//     // console.log("Form response saved successfully:", response);
//     // Initialize responses array if missing
//     // if (!form.responses) {
//     //   form.responses = [];
//     // }

//     // // Update the form with the new response
//     // form.responses.push(response._id);
//     // await form.save();
//     res.status(201).json({
//       message: "Form response submitted successfully",
//       data: response,
//       success: true,
//     });
//   } catch (error) {
//     console.error("Submit Form Response Error:", error);
//     res.status(500).json({ message: "Server error", error, success: false });
//   }
// };
