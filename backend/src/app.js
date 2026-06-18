import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';

import authRoutes from './routes/auth.routes.js';
import orderRoutes from "./routes/order.routes.js";
import uploadRoutes from "./routes/upload.routes.js";
import checklistRoutes from "./routes/checklist.routes.js";
import processRoutes from "./routes/process.routes.js";
import dashboardRoutes from "./routes/dashboard.routes.js";
import errorHandler from "./middlewares/error.middleware.js";
import healthRoutes from "./routes/health.routes.js";

const app = express();

app.use(helmet());
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      process.env.CLIENT_URL,
    ],
    credentials: true,
  })
);

if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
}

app.use(
    express.json({
        limit: "2mb",
    })
);

app.use(
    express.urlencoded({
        extended: true,
        limit: "2mb",
    })
);
app.use(cookieParser());
app.set("trust proxy", 1);

app.get('/', (req, res) => {
    res.json({
        success: true,
        message: "App is running....."
    });
});

app.use("/api/auth", authRoutes);
app.use("/api/orders", orderRoutes)
app.use("/api/upload", uploadRoutes);
app.use("/api/checklists", checklistRoutes);
app.use("/api/orders", processRoutes);
app.use("/api/dashboard", dashboardRoutes);

app.use("/api/health", healthRoutes);

app.use(errorHandler);

export default app;

