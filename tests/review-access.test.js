import test from 'node:test';import assert from 'node:assert/strict';
import {acceptsReviewCode,createReviewState} from '../review-access.js';
import {badgeCount,confirmIdentity,chooseFeature} from '../learning.js';
import {rocketStatus} from '../rockets.js';
test('review gate accepts only the disclosed code',()=>{assert.equal(acceptsReviewCode('773011'),true);for(const code of ['',null,'29','773010','773011x'])assert.equal(acceptsReviewCode(code),false);});
test('review character can explore all earned customisation without rocket achievements',()=>{const s=createReviewState(),p=s.profiles[0];assert.equal(badgeCount(p),6);assert.equal(p.species,'blob');confirmIdentity(p,{name:'Demo',species:'lunar',voice:'mallow'});assert.equal(chooseFeature(p,'colour','rainbow'),true);assert.equal(chooseFeature(p,'antennae','satellite'),true);assert.ok(p.owned.includes('coat-rainbow'));assert.equal(rocketStatus(p,2).launched,false);});
test('new demonstration sessions share no mutable learner or demo state',()=>{const a=createReviewState(),b=createReviewState();a.profiles[0].owned.length=0;a.profiles[0].mission.answers.length=0;assert.ok(b.profiles[0].owned.length>0);assert.equal(badgeCount(b.profiles[0]),6);});
