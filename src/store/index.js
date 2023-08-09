import { createStore } from 'vuex'
import { nanoid } from 'nanoid'

export default createStore({
    state: {
        parent: [],
        child: [],
        maxRowLength: 5,
        quantity: []

    },
    mutations: {
        addParent(state, payload) {
            let names = payload.names.map(el => {
                return {
                    id: el.id,
                    names: el.value,
                }
            })

            let ages = payload.ages.map(el => {
                return {
                    id: el.id,
                    ages: el.value,
                }
            })

            const spread = names.map(t1 => ({ ...t1, ...ages.find(t2 => t2.id === t1.id) }))
            state.parent = spread
            sessionStorage.setItem('parent', JSON.stringify(spread))
        },
        addChild(state, payload) {
            let names = payload.names.map(el => {
                return {
                    id: el.id,
                    names: el.value,
                }
            })

            let ages = payload.ages.map(el => {
                return {
                    id: el.id,
                    ages: el.value,
                }
            })

            const spread = names.map(t1 => ({ ...t1, ...ages.find(t2 => t2.id === t1.id) }))
            state.child = spread
            sessionStorage.setItem('child', JSON.stringify(spread))
        },

        hideRow(state, payload) {
            state.quantity = state.quantity.filter(row => row.id !== payload.id)
            state.child = state.child.filter(ch => ch.id !== payload.id)
            sessionStorage.setItem('child', JSON.stringify(state.child))
        },

        showRow(state) {
            state.quantity.push({ id: nanoid(), show: true })
        },

        getStore(state) {
            state.parent = JSON.parse(sessionStorage.getItem('parent'))
            state.child = JSON.parse(sessionStorage.getItem('child'))
        },
    },
    actions: {

    },
    getters: {

    }
})