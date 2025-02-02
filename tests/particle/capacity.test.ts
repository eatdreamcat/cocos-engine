import { cclegacy } from '@base/global';
import { director } from '../../cocos/game';
import { Node, Scene } from '../../cocos/scene-graph';
import { ParticleSystem } from '../../exports/particle';

test('particle system capacity test', function () {
    const scene = new Scene('test');
    director.runSceneImmediate(scene);

    const temp0 = new Node();
    scene.addChild(temp0);

    const particle = temp0.addComponent(ParticleSystem) as ParticleSystem;

    particle.capacity = 0;
    particle.renderer.useGPU = false;

    cclegacy.game.step();
    
    // @ts-expect-error
    expect(!!particle.processor.getModel()._vBuffer).toBe(true);
});