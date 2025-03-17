const calculateExercises = ({parts}) => {
    // Using reduce to sum up all exercise values

    return parts.reduce((sum, part) => sum + part.exercises, 0);  }

const Total = ({parts}) => {
    return(
        <div>
            <p>
                Number of exercises {calculateExercises({parts})}
            </p>
        </div>
    )
}

export default Total;