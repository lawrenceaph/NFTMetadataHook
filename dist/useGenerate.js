"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const generator_1 = require("nftmetadatagenerator/dist/generator");
const react_1 = require("react");
const useGenerator = (props) => {
    const { input } = props;
    const [outputs, setOutputs] = (0, react_1.useState)([]);
    (0, react_1.useEffect)(() => {
        setOutputs((0, generator_1.default)(input));
    }, [input]);
    return outputs;
};
exports.default = useGenerator;
