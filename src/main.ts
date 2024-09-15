import './style.css'
import {$01exercise} from './01exercise'
import {$02exercise} from './02exercise'
import {$03exercise} from './03exercise'



document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    <div id="exercise-1"></div>
    <div id="exercise-2"></div>
    <div id="exercise-3"></div>
    <div id="exercise-4"></div>
    <div id="exercise"></div>
`

$01exercise();
$02exercise();
$03exercise();