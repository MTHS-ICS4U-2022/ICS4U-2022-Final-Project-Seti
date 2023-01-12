/* global Phaser */

// #Constants
const UPDATE_EVERY = 1000 / 60

// #region game core
const getGameInitialState = (config = {}) => {
    return{}
}

// #region rendering
const getContainer = () => document.getElementById('container')

const getContainerSize = () => {
    const {width, height} = getContainer().getBoundingClientRect()
    return {width, height}
}

const getProjectors = (containerSize, game) => {
    return{}
}

const render = (state) => {
    console.log('render')
}

// #region main
const getInitialState = () => {
    const game = getGameInitialState()
    const containerSize = getContainerSize()
    return {
        game,
        bestScore: parseInt(localStorage.bestScore) || 0,
        ...containerSize,
        ...getProjectors(containerSize, game)
    }
}

const getNewStatePropsOnTick = (oldState) => {
    console.log('get new state')
}

const startGame = () => {
    let state = getInitialState()
    const updateState = props => {
        state = { ...state, ...props }
    }
}

window.addEventListener('resize', () => {
    console.log('resize')
})
window.addEventListener('keydown', ({ which }) => {
    console.log('keydown:', which)
})
window.addEventtListener('keyup', ({which}) => {
    console.log('keyup:', which)
})
const tick = () => {
    const newProps = getNewStatePropsOnTick(state)
    updateState(newProps)
    render(state)
}
setInterval(tick, UPDATE_EVERY)

// #endregion
startGame()