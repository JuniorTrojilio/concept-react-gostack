import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import api from './services/api'
import './App.css'

function App(){ 
    const [projects, setProjects] = useState([])
    
    useEffect(()=> {
        api.get('projects').then(res=> {
            setProjects(res.data)
        })
    }, [])

    async function handleAddProject(){
        // setProjects([...projects, `Novo projeto ${Date.now()}`])
        const response = await api.post('projects', {
            tittle : `Novo projeto ${Date.now()}`,
            owner : "Junior Trojilio"
        })

        const project = response.data

        setProjects([...projects, project])
    }

    return (
        <>
            <Header title="Projects"/>
            <ul>
                {projects.map(project => <li key={project.id}>{ project.tittle }</li>)}
            </ul>
            <button type="button" onClick={handleAddProject}>Adicionar Projeto</button>
        </>
        )
}

export default App