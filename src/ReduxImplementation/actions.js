import createRandomNumber from '../Redux Implementation/Utils/generateNumber';

const generateIdAction = () => {
    return {
        type: "NUEVA",
        payload: {
            id: createRandomNumber(),
        },
    };
};

export default generateIdAction;
