import * as React from "react";
import Svg, { Ellipse, Mask, G, Path, Circle } from "react-native-svg";

const Percent = (props) => (
    <Svg
        width={200}
        height={200}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Ellipse cx={100} cy={100.5} rx={87} ry={87.5} fill="#DBE3F5" />
        <Mask
            id="a"
            style={{
                maskType: "alpha",
            }}
            maskUnits="userSpaceOnUse"
            x={13}
            y={13}
            width={174}
            height={175}
        >
            <Ellipse cx={100} cy={100.5} rx={87} ry={87.5} fill="#DBE3F5" />
        </Mask>
        <G mask="url(#a)">
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M74.572 13.396 82.34 8.91a2.3 2.3 0 1 1 2.3 3.984l-7.768 4.484a2.3 2.3 0 0 1-2.3-3.983Zm-1.88 3.741a3.5 3.5 0 0 1 1.28-4.78l7.768-4.485a3.5 3.5 0 1 1 3.5 6.062l-7.768 4.485a3.5 3.5 0 0 1-4.78-1.282Zm-7.646 1.759-30.31 17.5a2.3 2.3 0 1 0 2.3 3.983l30.31-17.5a2.3 2.3 0 0 0-2.3-3.983Zm-30.91 16.46a3.5 3.5 0 1 0 3.5 6.063l30.31-17.5a3.5 3.5 0 0 0-3.5-6.063l-30.31 17.5Zm28.786 7.86-18.187 10.5a2.3 2.3 0 1 0 2.3 3.984l18.187-10.5a2.3 2.3 0 1 0-2.3-3.984Zm-18.787 9.46a3.5 3.5 0 1 0 3.5 6.063l18.187-10.5a3.5 3.5 0 1 0-3.5-6.062l-18.187 10.5ZM12.982 72.05l22.227-12.833a2.3 2.3 0 0 1 2.3 3.984L15.282 76.033a2.3 2.3 0 0 1-2.3-3.984ZM11.1 75.791a3.5 3.5 0 0 1 1.28-4.781L34.61 58.177a3.5 3.5 0 1 1 3.5 6.062L15.882 77.072A3.5 3.5 0 0 1 11.1 75.79Zm120.874-60.896-25.082 14.482a2.3 2.3 0 0 0 2.3 3.983l25.082-14.481a2.3 2.3 0 0 0-2.3-3.984Zm-25.682 13.442a3.5 3.5 0 1 0 3.5 6.063l25.082-14.482a3.5 3.5 0 1 0-3.5-6.062l-25.082 14.481Zm-86.869 51.54 77.943-45a2.3 2.3 0 0 1 2.3 3.983l-77.943 45a2.3 2.3 0 0 1-2.3-3.983Zm-1.88 3.742a3.5 3.5 0 0 1 1.28-4.782l77.943-45a3.5 3.5 0 0 1 3.5 6.063l-77.943 45a3.5 3.5 0 0 1-4.78-1.282ZM8.782 86.02l1.115-.644a2.3 2.3 0 1 1 2.3 3.983l-1.115.644a2.3 2.3 0 0 1-2.3-3.983Zm-1.881 3.742a3.5 3.5 0 0 1 1.28-4.782l1.116-.644a3.5 3.5 0 0 1 3.5 6.063l-1.115.644a3.5 3.5 0 0 1-4.781-1.281Zm65.546-52.047 46.71-26.968a2.3 2.3 0 1 1 2.3 3.984L74.748 41.7a2.3 2.3 0 0 1-2.3-3.984Zm-1.881 3.742a3.5 3.5 0 0 1 1.281-4.781l46.71-26.968a3.5 3.5 0 1 1 3.5 6.062l-46.71 26.968a3.5 3.5 0 0 1-4.781-1.281Zm-16.975-4.402-45.034 26a2.3 2.3 0 0 0 2.3 3.984l45.034-26a2.3 2.3 0 1 0-2.3-3.984ZM7.958 62.016a3.5 3.5 0 1 0 3.5 6.063l45.034-26a3.5 3.5 0 0 0-3.5-6.062l-45.034 26Zm55.16-30.46 31.177-18a2.3 2.3 0 0 1 2.3 3.984l-31.177 18a2.3 2.3 0 1 1-2.3-3.984Zm-1.881 3.742a3.5 3.5 0 0 1 1.281-4.781l31.177-18a3.5 3.5 0 0 1 3.5 6.062l-31.177 18a3.5 3.5 0 0 1-4.781-1.281Zm47.032-29.81-4.448 2.568a2.3 2.3 0 0 0 2.3 3.984l4.448-2.568a2.3 2.3 0 0 0-2.3-3.984Zm-5.048 1.529a3.5 3.5 0 0 0 3.5 6.062l4.448-2.568a3.5 3.5 0 0 0-3.5-6.062l-4.448 2.568Zm-88.323 87.02 47.632-27.5a2.3 2.3 0 0 1 2.3 3.983l-47.632 27.5a2.3 2.3 0 0 1-2.3-3.983Zm-1.881 3.742a3.5 3.5 0 0 1 1.281-4.781l47.632-27.5a3.5 3.5 0 1 1 3.5 6.062l-47.632 27.5a3.5 3.5 0 0 1-4.781-1.281Zm84.154-51.242-25.115 14.5a2.3 2.3 0 1 0 2.3 3.983l25.115-14.5a2.3 2.3 0 1 0-2.3-3.983Zm-25.715 13.46a3.5 3.5 0 1 0 3.5 6.063l25.115-14.5a3.5 3.5 0 0 0-3.5-6.062l-25.115 14.5Zm35.241-18.96 35.923-20.74a2.299 2.299 0 1 1 2.3 3.983l-35.923 20.74a2.3 2.3 0 0 1-2.3-3.983Zm-1.881 3.742a3.5 3.5 0 0 1 1.281-4.781l35.923-20.74a3.5 3.5 0 0 1 3.5 6.062l-35.923 20.74a3.5 3.5 0 0 1-4.781-1.281Zm17.551 33.399-77.943 45a2.3 2.3 0 0 0 2.3 3.984l77.943-45a2.3 2.3 0 0 0-2.3-3.984Zm-78.543 43.961a3.5 3.5 0 1 0 3.5 6.062l77.943-45a3.5 3.5 0 0 0-3.5-6.062l-77.943 45Zm-23.648 15.039 14.722-8.5a2.3 2.3 0 0 1 2.3 3.984l-14.722 8.5a2.3 2.3 0 0 1-2.3-3.984Zm-1.881 3.742a3.5 3.5 0 0 1 1.28-4.781l14.723-8.5a3.5 3.5 0 1 1 3.5 6.062l-14.722 8.5a3.5 3.5 0 0 1-4.781-1.281Zm158.631-94.242-45.033 26a2.3 2.3 0 0 0 2.3 3.984l45.033-26a2.3 2.3 0 0 0-2.3-3.984Zm-45.633 24.96a3.5 3.5 0 1 0 3.5 6.063l45.033-26a3.5 3.5 0 1 0-3.5-6.062l-45.033 26ZM15.176 128.518l45.033-26a2.3 2.3 0 0 1 2.3 3.984l-45.033 26a2.3 2.3 0 0 1-2.3-3.984Zm-1.881 3.742a3.5 3.5 0 0 1 1.28-4.781l45.034-26a3.5 3.5 0 0 1 3.5 6.062l-45.033 26a3.5 3.5 0 0 1-4.781-1.281Zm74.627-45.742-18.187 10.5a2.3 2.3 0 1 0 2.3 3.984l18.187-10.5a2.3 2.3 0 0 0-2.3-3.984Zm-18.787 9.461a3.5 3.5 0 1 0 3.5 6.062l18.187-10.5a3.5 3.5 0 0 0-3.5-6.062l-18.187 10.5Zm28.313-14.96L169 39.705a2.3 2.3 0 0 1 2.3 3.984L99.748 85.001a2.3 2.3 0 0 1-2.3-3.984Zm-1.881 3.741a3.5 3.5 0 0 1 1.281-4.781l71.552-41.31a3.501 3.501 0 0 1 3.5 6.062l-71.552 41.31a3.5 3.5 0 0 1-4.781-1.28Zm-45.358.438-39.785 22.97a2.3 2.3 0 0 0 2.3 3.984l39.785-22.97a2.3 2.3 0 0 0-2.3-3.984ZM9.824 107.128a3.5 3.5 0 1 0 3.5 6.062l39.785-22.97a3.5 3.5 0 0 0-3.5-6.062l-39.785 22.97Zm49.911-27.431 30.311-17.5a2.3 2.3 0 0 1 2.3 3.984l-30.31 17.5a2.3 2.3 0 0 1-2.3-3.984Zm-1.88 3.742a3.5 3.5 0 0 1 1.28-4.781l30.311-17.5a3.5 3.5 0 0 1 3.5 6.062l-30.31 17.5a3.5 3.5 0 0 1-4.782-1.281Zm93.296-56.52L99.572 56.696a2.3 2.3 0 0 0 2.3 3.984l51.579-29.78a2.3 2.3 0 0 0-2.3-3.983ZM98.972 55.657a3.5 3.5 0 0 0 3.5 6.062l51.579-29.779a3.5 3.5 0 1 0-3.5-6.062L98.973 55.658Zm-65.414 50.699 45.034-26a2.3 2.3 0 0 1 2.3 3.984l-45.034 26a2.3 2.3 0 0 1-2.3-3.984Zm-1.88 3.742a3.5 3.5 0 0 1 1.28-4.781l45.034-26a3.5 3.5 0 1 1 3.5 6.062l-45.034 26a3.5 3.5 0 0 1-4.78-1.281Zm87.617-53.242-31.177 18a2.3 2.3 0 1 0 2.3 3.984l31.177-18a2.3 2.3 0 0 0-2.3-3.984Zm-31.777 16.96a3.5 3.5 0 1 0 3.5 6.063l31.177-18a3.5 3.5 0 0 0-3.5-6.062l-31.177 18Zm41.303-22.46 31.785-18.351a2.3 2.3 0 0 1 2.3 3.984l-31.785 18.35a2.3 2.3 0 1 1-2.3-3.983ZM126.94 55.1a3.5 3.5 0 0 1 1.281-4.781l31.785-18.351a3.5 3.5 0 1 1 3.5 6.062L131.721 56.38a3.5 3.5 0 0 1-4.781-1.281ZM24.032 111.857l-13.856 8a2.3 2.3 0 0 0 2.3 3.984l13.856-8a2.3 2.3 0 0 0-2.3-3.984Zm-14.456 6.961a3.5 3.5 0 1 0 3.5 6.062l13.856-8a3.5 3.5 0 1 0-3.5-6.062l-13.856 8Zm70.16-4.48 47.631-27.5a2.3 2.3 0 0 1 2.3 3.984l-47.632 27.5a2.3 2.3 0 0 1-2.3-3.984Zm-1.882 3.742a3.5 3.5 0 0 1 1.281-4.781l47.632-27.5a3.5 3.5 0 0 1 3.5 6.062l-47.632 27.5a3.5 3.5 0 0 1-4.78-1.281Zm98.876-59.742-25.115 14.5a2.299 2.299 0 1 0 2.3 3.984l25.115-14.5a2.3 2.3 0 0 0-2.3-3.984Zm-25.715 13.46a3.5 3.5 0 0 0 3.5 6.063l25.115-14.5a3.5 3.5 0 1 0-3.5-6.062l-25.115 14.5Zm-125.84 74.04 45.034-26a2.3 2.3 0 0 1 2.3 3.984l-45.033 26a2.3 2.3 0 0 1-2.3-3.984Zm-1.88 3.742a3.5 3.5 0 0 1 1.28-4.781l45.034-26a3.5 3.5 0 1 1 3.5 6.062l-45.033 26a3.5 3.5 0 0 1-4.781-1.281Zm124.072-28.101-77.943 45a2.3 2.3 0 0 0 2.3 3.984l77.943-45a2.3 2.3 0 0 0-2.3-3.984ZM68.824 165.44a3.5 3.5 0 1 0 3.5 6.062l77.943-45a3.5 3.5 0 0 0-3.5-6.062l-77.943 45Zm-15.191 10.156 6.265-3.617a2.3 2.3 0 0 1 2.3 3.984l-6.265 3.617a2.3 2.3 0 0 1-2.3-3.984Zm-1.881 3.742a3.5 3.5 0 0 1 1.281-4.781l6.265-3.617a3.5 3.5 0 1 1 3.5 6.062l-6.265 3.617a3.5 3.5 0 0 1-4.781-1.281Zm137.105-81.813-31.964 18.454a2.3 2.3 0 0 0 2.3 3.984l31.964-18.454a2.301 2.301 0 0 0-2.3-3.984Zm-32.564 17.415a3.5 3.5 0 1 0 3.5 6.062l31.964-18.454a3.5 3.5 0 0 0-3.5-6.062l-31.964 18.454ZM45.83 168.554l39.379-22.735a2.299 2.299 0 1 1 2.3 3.983L48.13 172.538a2.3 2.3 0 0 1-2.3-3.984Zm-1.88 3.742a3.5 3.5 0 0 1 1.28-4.781l39.379-22.736a3.5 3.5 0 0 1 3.5 6.062L48.73 173.577a3.5 3.5 0 0 1-4.78-1.281Zm68.972-42.477-18.187 10.5a2.299 2.299 0 1 0 2.3 3.983l18.187-10.5a2.3 2.3 0 1 0-2.3-3.983Zm-18.787 9.46a3.5 3.5 0 0 0 3.5 6.062l18.187-10.5a3.5 3.5 0 0 0-3.5-6.062l-18.187 10.5Zm28.313-14.96 64.902-37.472a2.3 2.3 0 0 1 2.3 3.984l-64.902 37.471a2.3 2.3 0 0 1-2.3-3.983Zm-1.881 3.741a3.5 3.5 0 0 1 1.281-4.781l64.902-37.47a3.5 3.5 0 0 1 3.5 6.062l-64.902 37.47a3.5 3.5 0 0 1-4.781-1.281Zm-45.358.438-45.033 26a2.3 2.3 0 0 0 2.3 3.984l45.033-26a2.3 2.3 0 0 0-2.3-3.984Zm-45.633 24.961a3.5 3.5 0 1 0 3.5 6.062l45.033-26a3.5 3.5 0 1 0-3.5-6.062l-45.033 26Zm55.16-30.461 30.31-17.5a2.3 2.3 0 0 1 2.3 3.984l-30.31 17.5a2.3 2.3 0 0 1-2.3-3.984Zm-1.882 3.742a3.5 3.5 0 0 1 1.281-4.781l30.311-17.5a3.5 3.5 0 1 1 3.5 6.062l-30.31 17.5a3.5 3.5 0 0 1-4.782-1.281Zm101.474-61.242-59.756 34.5a2.3 2.3 0 1 0 2.3 3.984l59.756-34.5a2.3 2.3 0 0 0-2.3-3.984ZM123.972 98.96a3.5 3.5 0 0 0 3.5 6.062l59.756-34.5a3.5 3.5 0 1 0-3.5-6.062l-59.756 34.5Zm-65.414 50.699 45.034-26a2.3 2.3 0 0 1 2.3 3.984l-45.034 26a2.3 2.3 0 0 1-2.3-3.984Zm-1.88 3.742a3.5 3.5 0 0 1 1.28-4.781l45.034-26a3.5 3.5 0 0 1 3.5 6.062l-45.034 26a3.5 3.5 0 0 1-4.78-1.281Zm87.617-53.242-31.177 18a2.3 2.3 0 0 0 2.3 3.984l31.177-18a2.3 2.3 0 0 0-2.3-3.984Zm-31.777 16.961a3.5 3.5 0 1 0 3.5 6.062l31.177-18a3.5 3.5 0 0 0-3.5-6.062l-31.177 18Zm41.303-22.46 32.909-19a2.3 2.3 0 1 1 2.3 3.983l-32.909 19a2.3 2.3 0 0 1-2.3-3.984ZM151.94 98.4a3.5 3.5 0 0 1 1.281-4.78l32.909-19a3.5 3.5 0 1 1 3.5 6.061l-32.909 19a3.5 3.5 0 0 1-4.781-1.28ZM49.032 155.158l-13.856 8a2.3 2.3 0 0 0 2.3 3.984l13.856-8a2.3 2.3 0 0 0-2.3-3.984Zm-14.456 6.961a3.5 3.5 0 0 0 3.5 6.062l13.856-8a3.5 3.5 0 1 0-3.5-6.062l-13.856 8Zm102.317-80.78 5.196-3a2.3 2.3 0 1 1 2.3 3.983l-5.196 3a2.3 2.3 0 0 1-2.3-3.984Zm-1.881 3.74a3.5 3.5 0 0 1 1.281-4.78l5.196-3a3.5 3.5 0 1 1 3.5 6.062l-5.196 3a3.5 3.5 0 0 1-4.781-1.281Zm-37.205 76.56L64.66 180.777a2.3 2.3 0 0 0 2.3 3.984l33.147-19.138a2.3 2.3 0 0 0-2.3-3.984ZM64.06 179.738a3.5 3.5 0 1 0 3.5 6.062l33.147-19.138a3.5 3.5 0 1 0-3.5-6.062L64.06 179.738Zm57.996-32.099 25.115-14.5a2.3 2.3 0 1 1 2.3 3.984l-25.115 14.5a2.3 2.3 0 0 1-2.3-3.984Zm-1.881 3.742a3.5 3.5 0 0 1 1.281-4.781l25.115-14.5a3.5 3.5 0 0 1 3.5 6.062l-25.115 14.5a3.5 3.5 0 0 1-4.781-1.281Zm66.769-41.205-30.247 17.463a2.3 2.3 0 0 0 2.3 3.984l30.247-17.463a2.3 2.3 0 0 0-2.3-3.984ZM156.097 126.6a3.5 3.5 0 1 0 3.5 6.062l30.247-17.463a3.5 3.5 0 1 0-3.5-6.062L156.097 126.6Zm-36.362 57.02 18.187-10.5a2.3 2.3 0 0 1 2.3 3.984l-18.187 10.5a2.3 2.3 0 0 1-2.3-3.984Zm-1.881 3.742a3.5 3.5 0 0 1 1.281-4.781l18.187-10.5a3.5 3.5 0 1 1 3.5 6.062l-18.187 10.5a3.5 3.5 0 0 1-4.781-1.281Zm57.205-35.683-27.611 15.941a2.3 2.3 0 0 0 2.3 3.984l27.611-15.942a2.3 2.3 0 1 0-2.3-3.983Zm-28.211 14.902a3.5 3.5 0 0 0 3.5 6.062l27.611-15.941a3.5 3.5 0 1 0-3.5-6.063l-27.611 15.942Zm-69.062 18.164 22.423-12.946a2.3 2.3 0 0 1 2.3 3.984l-22.423 12.946a2.3 2.3 0 0 1-2.3-3.984Zm-1.881 3.742a3.5 3.5 0 0 1 1.281-4.781l22.423-12.946a3.5 3.5 0 0 1 3.5 6.062l-22.423 12.946a3.5 3.5 0 0 1-4.781-1.281Zm64.141-39.688-30.311 17.5a2.3 2.3 0 0 0 2.3 3.984l30.311-17.5a2.3 2.3 0 0 0-2.3-3.984Zm-30.911 16.461a3.5 3.5 0 0 0 3.5 6.062l30.311-17.5a3.5 3.5 0 1 0-3.5-6.062l-30.311 17.5Zm40.437-21.961 35.214-20.33a2.3 2.3 0 0 1 2.3 3.984l-35.214 20.33a2.3 2.3 0 1 1-2.3-3.984Zm-1.881 3.742a3.5 3.5 0 0 1 1.281-4.781l35.214-20.33a3.5 3.5 0 1 1 3.5 6.062l-35.214 20.33a3.5 3.5 0 0 1-4.781-1.281Zm-19.099 19.919-37.355 21.567a2.3 2.3 0 1 0 2.3 3.983l37.355-21.567a2.3 2.3 0 1 0-2.3-3.983Zm-37.955 20.527a3.5 3.5 0 0 0 3.5 6.062l37.355-21.566a3.5 3.5 0 0 0-3.5-6.062l-37.355 21.566Zm47.481-26.027 31.177-18a2.3 2.3 0 1 1 2.3 3.983l-31.177 18a2.3 2.3 0 1 1-2.3-3.983Zm-1.881 3.742a3.5 3.5 0 0 1 1.281-4.782l31.177-18a3.5 3.5 0 0 1 3.5 6.063l-31.177 18a3.5 3.5 0 0 1-4.781-1.281Zm46.433-29.465-3.849 2.223a2.3 2.3 0 1 0 2.3 3.983l3.849-2.222a2.3 2.3 0 0 0-2.3-3.984Zm-4.449 1.183a3.5 3.5 0 0 0 3.5 6.063l3.849-2.223a3.5 3.5 0 1 0-3.5-6.062l-3.849 2.222Zm-70.888 19.219 5.196-3a2.3 2.3 0 0 1 2.3 3.984l-5.196 3a2.3 2.3 0 0 1-2.3-3.984Zm-1.881 3.742a3.5 3.5 0 0 1 1.281-4.781l5.196-3a3.5 3.5 0 1 1 3.5 6.062l-5.196 3a3.5 3.5 0 0 1-4.781-1.281Z"
                fill="#fff"
            />
        </G>
        <Path
            d="M109.914 71.197a3.025 3.025 0 0 0-2.175-1.002 3.036 3.036 0 0 0-2.225.888l-34.477 34.486a3.034 3.034 0 0 0-.622 3.389c.167.372.408.707.708.985l3.928 3.634c.106.1.298.203.666.217.383.018.866-.071 1.354-.271a9.051 9.051 0 0 1 9.55 1.74 9.05 9.05 0 0 1 2.479 9.386c-.15.441-.206.909-.166 1.374.046.366.163.549.272.646l2.914 2.697a3.033 3.033 0 0 0 4.186-.063l32.937-32.349a3.04 3.04 0 0 0 .128-4.2L126.3 89.35c-.097-.103-.269-.22-.623-.275a3.31 3.31 0 0 0-1.331.12 9.06 9.06 0 0 1-11.489-8.714c0-1.171.223-2.291.629-3.323.188-.477.271-.943.257-1.311-.017-.354-.114-.537-.212-.643L109.92 71.2l-.006-.003Zm-7.428-3.143a7.319 7.319 0 0 1 10.611.272l3.614 4.003c1.812 2.008 1.423 4.717.76 6.4a4.77 4.77 0 0 0 .895 4.94 4.763 4.763 0 0 0 4.823 1.394c1.74-.486 4.474-.6 6.288 1.411l3.072 3.406a7.325 7.325 0 0 1-.306 10.129l-32.937 32.348a7.319 7.319 0 0 1-10.1.152l-2.915-2.697c-2.04-1.886-1.837-4.706-1.277-6.463a4.762 4.762 0 0 0-6.331-5.857c-1.712.694-4.506 1.114-6.543-.772l-3.931-3.631a7.333 7.333 0 0 1-2.35-5.234 7.327 7.327 0 0 1 2.144-5.321l34.486-34.477-.003-.003Z"
            fill="#000"
        />
        <Path
            d="M95.686 101.942c-.9 0-1.614-.324-2.142-.972-.516-.66-.774-1.644-.774-2.952 0-1.32.258-2.298.774-2.934.528-.648 1.242-.972 2.142-.972.9 0 1.608.324 2.124.972.516.636.774 1.614.774 2.934 0 1.308-.258 2.292-.774 2.952-.516.648-1.224.972-2.124.972Zm0-1.242c.444 0 .774-.21.99-.63.216-.42.324-1.104.324-2.052 0-.936-.108-1.614-.324-2.034-.216-.42-.546-.63-.99-.63-.444 0-.774.21-.99.63-.216.42-.324 1.098-.324 2.034 0 .948.108 1.632.324 2.052.216.42.546.63.99.63Zm-.27 6.3 7.434-12.816h1.728L97.18 107h-1.764Zm8.892.072c-.9 0-1.614-.324-2.142-.972-.516-.66-.774-1.644-.774-2.952 0-1.32.258-2.298.774-2.934.528-.648 1.242-.972 2.142-.972.9 0 1.608.324 2.124.972.516.636.774 1.614.774 2.934 0 1.308-.258 2.292-.774 2.952-.516.648-1.224.972-2.124.972Zm0-1.242c.444 0 .774-.21.99-.63.216-.42.324-1.104.324-2.052 0-.936-.108-1.614-.324-2.034-.216-.42-.546-.63-.99-.63-.444 0-.774.21-.99.63-.216.42-.324 1.098-.324 2.034 0 .948.108 1.632.324 2.052.216.42.546.63.99.63Z"
            fill="#000"
        />
        <Circle cx={100} cy={100} r={98} stroke="#DBE3F5" strokeWidth={4} />
    </Svg>
);

export default Percent;
