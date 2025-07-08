import jwt from "jsonwebtoken";

const adminAuth = async (req, res, next) => {
  try {
    let token;

    const authHeader = req.headers.authorization;
    if (authHeader && authHeader.startsWith("Bearer ")) {
      token = authHeader.split(" ")[1];
    } else if (req.body.token) {
      token = req.body.token;
    }

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Not Authorized. Please log in again.",
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (
      decoded.email !== process.env.ADMIN_EMAIL ||
      decoded.password !== process.env.ADMIN_PASSWORD
    ) {
      return res.status(403).json({
        success: false,
        message: "Access denied. Invalid admin credentials.",
      });
    }

    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({
      success: false,
      message: "Authorization failed: " + error.message,
    });
  }
};

export default adminAuth;
