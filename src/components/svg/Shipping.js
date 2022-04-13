import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

const Shipping = (props) => (
    <Svg
        width={78}
        height={21}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <G
            clipPath="url(#a)"
            stroke="#FFBE00"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <Path d="M73.333 5.75h-8.75v7.583h8.75V5.75ZM73.333 8.667h2.334l1.75 1.75v2.916h-4.084V8.667ZM67.208 16.25a1.458 1.458 0 1 0 0-2.917 1.458 1.458 0 0 0 0 2.917ZM74.792 16.25a1.458 1.458 0 1 0 0-2.917 1.458 1.458 0 0 0 0 2.917Z" />
        </G>
        <Path
            d="M5.427 16.126c-.794 0-1.503-.103-2.128-.308a5.026 5.026 0 0 1-1.638-.882l.42-.924c.326.243.653.448.98.616.336.159.695.28 1.078.364.382.075.812.112 1.288.112.83 0 1.446-.154 1.848-.462.4-.308.602-.719.602-1.232 0-.439-.14-.775-.42-1.008-.28-.233-.77-.42-1.47-.56l-1.47-.294c-.906-.187-1.582-.49-2.03-.91-.44-.42-.658-.99-.658-1.708 0-.588.149-1.101.448-1.54.308-.439.737-.78 1.288-1.022.55-.243 1.19-.364 1.918-.364.7 0 1.339.107 1.918.322a4.01 4.01 0 0 1 1.484.91l-.406.896a4.094 4.094 0 0 0-1.386-.84c-.476-.177-1.018-.266-1.624-.266-.766 0-1.372.168-1.82.504-.44.327-.658.775-.658 1.344 0 .457.14.817.42 1.078.28.252.742.443 1.386.574l1.484.294c.952.196 1.652.49 2.1.882.448.392.672.943.672 1.652 0 .541-.15 1.022-.448 1.442-.29.42-.705.747-1.246.98-.542.233-1.186.35-1.932.35ZM10.803 16V5.696h1.134v4.83h-.182c.196-.55.523-.966.98-1.246.467-.29 1.004-.434 1.61-.434.84 0 1.466.229 1.876.686.41.448.616 1.13.616 2.044V16h-1.134v-4.354c0-.653-.13-1.13-.392-1.428-.252-.299-.662-.448-1.232-.448-.653 0-1.176.2-1.568.602-.382.401-.574.929-.574 1.582V16h-1.134Zm8.203 0V8.972h1.134V16h-1.134Zm-.14-8.624V6.102h1.4v1.274h-1.4Zm3.476 11.648v-8.428c0-.261-.014-.527-.042-.798-.018-.28-.042-.555-.07-.826h1.092l.154 1.666h-.168c.15-.55.453-.985.91-1.302.458-.327 1.004-.49 1.638-.49.635 0 1.181.145 1.638.434.467.29.831.705 1.092 1.246.262.541.392 1.195.392 1.96 0 .756-.13 1.405-.392 1.946a2.916 2.916 0 0 1-1.078 1.26c-.466.29-1.017.434-1.652.434-.625 0-1.166-.159-1.624-.476a2.25 2.25 0 0 1-.91-1.302h.154v4.676h-1.134Zm3.29-3.822c.672 0 1.204-.229 1.596-.686.402-.467.602-1.143.602-2.03 0-.896-.2-1.573-.602-2.03-.392-.467-.924-.7-1.596-.7-.662 0-1.194.233-1.596.7-.392.457-.588 1.134-.588 2.03 0 .887.196 1.563.588 2.03.402.457.934.686 1.596.686Zm5.105 3.822v-8.428c0-.261-.014-.527-.042-.798-.019-.28-.042-.555-.07-.826h1.092l.154 1.666h-.168c.15-.55.453-.985.91-1.302.457-.327 1.003-.49 1.638-.49s1.18.145 1.638.434c.466.29.83.705 1.092 1.246.261.541.392 1.195.392 1.96 0 .756-.13 1.405-.392 1.946a2.916 2.916 0 0 1-1.078 1.26c-.467.29-1.017.434-1.652.434-.625 0-1.167-.159-1.624-.476a2.25 2.25 0 0 1-.91-1.302h.154v4.676h-1.134Zm3.29-3.822c.672 0 1.204-.229 1.596-.686.401-.467.602-1.143.602-2.03 0-.896-.2-1.573-.602-2.03-.392-.467-.924-.7-1.596-.7-.663 0-1.195.233-1.596.7-.392.457-.588 1.134-.588 2.03 0 .887.196 1.563.588 2.03.401.457.933.686 1.596.686ZM39.13 16V8.972h1.134V16h-1.134Zm-.14-8.624V6.102h1.4v1.274h-1.4ZM42.467 16v-5.404c0-.261-.014-.527-.042-.798-.018-.28-.042-.555-.07-.826h1.092l.14 1.54h-.168c.206-.541.532-.952.98-1.232.458-.29.985-.434 1.582-.434.831 0 1.456.224 1.876.672.43.439.644 1.134.644 2.086V16h-1.134v-4.326c0-.663-.135-1.143-.406-1.442-.261-.308-.672-.462-1.232-.462-.653 0-1.171.2-1.554.602-.382.401-.574.938-.574 1.61V16h-1.134Zm11.297 3.122a5.996 5.996 0 0 1-1.68-.224 4.279 4.279 0 0 1-1.386-.686l.337-.854c.289.205.574.369.854.49s.569.21.867.266c.3.065.617.098.953.098.69 0 1.213-.182 1.567-.546.355-.364.532-.882.532-1.554v-2.058h.14c-.149.55-.457.99-.923 1.316-.467.317-1.013.476-1.639.476-.644 0-1.204-.14-1.68-.42a2.946 2.946 0 0 1-1.092-1.218c-.252-.532-.377-1.157-.377-1.876 0-.71.125-1.325.377-1.848a2.852 2.852 0 0 1 1.093-1.204c.475-.29 1.035-.434 1.68-.434.634 0 1.18.159 1.638.476.466.317.774.756.924 1.316l-.14-.14.126-1.526h1.105c-.037.27-.065.546-.084.826-.018.27-.028.537-.028.798v5.362c0 1.045-.27 1.834-.811 2.366-.532.532-1.316.798-2.352.798Zm-.168-4.2c.682 0 1.219-.224 1.61-.672.392-.457.588-1.097.588-1.918s-.195-1.456-.587-1.904c-.392-.448-.93-.672-1.61-.672-.672 0-1.21.224-1.61.672-.402.448-.602 1.083-.602 1.904s.2 1.46.602 1.918c.4.448.938.672 1.61.672Z"
            fill="#FFBE00"
        />
        <Defs>
            <ClipPath id="a">
                <Path
                    fill="#fff"
                    transform="translate(64 4)"
                    d="M0 0h14v14H0z"
                />
            </ClipPath>
        </Defs>
    </Svg>
);

export default Shipping;