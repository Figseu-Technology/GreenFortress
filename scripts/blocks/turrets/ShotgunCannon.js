const ShotgunCannonCharge = Effect(40, e => {
    Draw.color(Color.white, Color.red, e.fin());
    Lines.stroke(e.fin() * 4);
    Lines.circle(e.x, e.y, e.fout() * 20);
    const d = new Floatc2({get(x, y){
    Lines.lineAngle(e.x + x, e.y + y, Mathf.angle(x, y), e.fslope() * 12 + 1);
    }}) 
    Angles.randLenVectors(e.id, 8, 1 + 120 * e.fout(), e.rotation, 45,d);
});
const ShotgunCannonShoot = Effect(30, e => {
    Draw.color(Color.gold, Color.white, e.fin());
    Lines.stroke(e.fout() * 7);
    const d = new Floatc2({get(x, y){
    Lines.lineAngle(e.x + x, e.y + y, Mathf.angle(x, y), e.fslope() * 12 + 1);
    }}) 
    Angles.randLenVectors(e.id, 32, 1 + 140 * e.fin(), e.rotation, 20,d);
    Draw.color(Color.yellow, Color.white, e.fin());
    Lines.stroke(e.fout() * 9);
    Angles.randLenVectors(e.id, 32, 1 + 170 * e.fin(), e.rotation, 30,d);
    Draw.color(Color.goldenrod, Color.valueOf("#DB0707"), e.fin());
    Lines.stroke(e.fout() * 11);
    Angles.randLenVectors(e.id, 32, 1 + 200 * e.fin(), e.rotation, 40,d);
    Draw.color(Color.white, Color.white, e.fin());
    Lines.circle(e.x, e.y, e.fin() * 80);
});
const ShotgunCannonPlasmaTrail = Effect(45, e => {
	Draw.color(Color.valueOf("#FF7F00"), Color.valueOf("#E60099"), e.fin());
    const d = new Floatc2({get(x, y){
    Fill.circle(e.x + x, e.y + y, 0.25 + e.fin() * 3);
    }})
    Angles.randLenVectors(e.id, 6, -10 + 40 * e.fin(), e.rotation + 180, 360 * e.fin(),d);
	Draw.color(Color.valueOf("#00FFEF"), Color.valueOf("#0045FF"), e.fout());
    Angles.randLenVectors(e.id, 6, -10 + 40 * e.fout(), e.rotation, 360 * e.fout(),d);
});
const ShotgunCannonPlasmaExplosion = Effect(60, e => {
    Draw.color(Color.valueOf("#FFEAF7"), Color.valueOf("#999900"), e.fin());
    Lines.stroke(e.fout() * 12);
    const d = new Floatc2({get(x, y){
    Lines.lineAngle(e.x + x, e.y + y, Mathf.angle(x, y), e.fslope() * 6 + 1 + e.fout() * 12);
    }}) 
    Angles.randLenVectors(e.id, 150, -20 + 360 * e.fin(), e.rotation, 360,d);
    Draw.color(Color.valueOf("#A20062"), Color.valueOf("#FF005D"), Math.abs(-0.4 + e.fin() * 1.4));
    const g = new Floatc2({get(x, y){
    Fill.circle(e.x + x, e.y + y, e.fout() * 7.4);
    }}) 
    const h = new Floatc2({get(x, y){
    Fill.circle(e.x + x, e.y + y, e.fout() * 12);
    Angles.randLenVectors(e.id, 3, -2 + 9 * e.fin(), e.rotation + Mathf.random(-180,180) * e.fin(), 360,g);
    }}) 
    Draw.color(Color.valueOf("#FFEAF7"), Color.valueOf("#00FF76"), e.fin());
    Angles.randLenVectors(e.id, 25, -20 + 250 * e.fin(), e.rotation, 360,h);
});
const ShotgunCannonPlasmaExplosionSpark = Effect(195, e => {
    Draw.color(Color.gold, Color.white, e.fin());
    const d = new Floatc2({get(x, y){
    Fill.square(e.x + x, e.y + y, e.fout() * Math.abs(2 + Mathf.random(-1,1) * 2), 45 + e.rotation);
    }}) 
    Angles.randLenVectors(e.id, 20, 10 + 391 * e.fin(), e.rotation, 360,d);
});
const ShotgunCannonPlasmaFragmentExplosion = Effect(40, e => {
    Draw.color(Color.valueOf("#FFEAD9"), Color.valueOf("#61003B"), e.fin());
    Lines.stroke(e.fout() * 4);
    Draw.alpha(e.fout());
    const d = new Floatc2({get(x, y){
    Fill.circle(e.x + x, e.y + y, 2.5 - Math.abs(2.5 - (e.fin() * 5)));
    }}) 
    Angles.randLenVectors(e.id, 3, -20 + 170 * e.fin(), e.rotation, 45,d);
});

const ShotgunCannonPlasmaFrag = extend(ShrapnelBulletType, {});
ShotgunCannonPlasmaFrag.lifetime = 900;
ShotgunCannonPlasmaFrag.damage = 3000000000;
ShotgunCannonPlasmaFrag.width = 25;
ShotgunCannonPlasmaFrag.height = 20000;
ShotgunCannonPlasmaFrag.lightRadius = 200;
ShotgunCannonPlasmaFrag.shrinkY = 0.75;
ShotgunCannonPlasmaFrag.despawnEffect = ShotgunCannonPlasmaFragmentExplosion;
ShotgunCannonPlasmaFrag.hitEffect = Fx.none;
ShotgunCannonPlasmaFrag.frontColor = Color.valueOf("#FFEAF7");
ShotgunCannonPlasmaFrag.trailColor = Color.valueOf("#A20062");
ShotgunCannonPlasmaFrag.backColor = Color.valueOf("#FFEAF7");
ShotgunCannonPlasmaFrag.pierce = true;
ShotgunCannonPlasmaFrag.pierceBuilding = true;
ShotgunCannonPlasmaFrag.status = StatusEffects.shocked;
ShotgunCannonPlasmaFrag.statusDuration = 300;
ShotgunCannonPlasmaFrag.sprite = "bullet";
ShotgunCannonPlasmaFrag.homingPower = 0;
ShotgunCannonPlasmaFrag.homingRange = 0;
ShotgunCannonPlasmaFrag.hitSound = loadSound("stringmake");

const ShotgunCannonPlasmaSphere = Effect(24, e => {
    Draw.color(Color.valueOf("#FFEAF7"), Color.valueOf("#A20062"), e.fin());
    const g = new Floatc2({get(x, y){
    Fill.circle(e.x + x, e.y + y, 9 - Math.abs(9 - (e.fin() * 18)));
    }})
    Angles.randLenVectors(e.id, 2, -10 + 20 * e.fin(), e.rotation + Mathf.random(-15,15), 360 * e.fin(),g);
    Draw.color(Color.valueOf("#FFEAF7"), Color.valueOf("#A20062"), e.fout());
    Angles.randLenVectors(e.id + 2, 2, -10 + 20 * e.fin(), e.rotation + Mathf.random(-15,15), 360 * e.fin(),g);
});

const ShotgunCannonPlasma = extend(ShrapnelBulletType, {
    update(b){
        this.super$update(b);
        if(b.timer.get(0, 3 + b.fslope() * 2)){
            this.trailEffect.at(b.x, b.y);
        }
		ShotgunCannonPlasmaSphere.at(b.x + Mathf.random(-10,10), b.y + Mathf.random(-10,10));
		this.supressCollision = false;
    },
	hit(b, x, y){
		this.super$hit(b, b.x, b.y);
		ShotgunCannonPlasmaExplosionSpark.at(b.x, b.y);
	}
	
});
ShotgunCannonPlasma.collidesAir = true;
ShotgunCannonPlasma.collides = true;
ShotgunCannonPlasma.collidesTiles = true;
ShotgunCannonPlasma.speed = 6.5;
ShotgunCannonPlasma.damage = 1500000000000;
ShotgunCannonPlasma.lifetime = 3000;
ShotgunCannonPlasma.width = 40;
ShotgunCannonPlasma.height = 45;
ShotgunCannonPlasma.hitSize = 20;
ShotgunCannonPlasma.frontColor = Color.valueOf("#FFEAF7");
ShotgunCannonPlasma.backColor = Color.valueOf("#A20062");
ShotgunCannonPlasma.lightColor = Color.valueOf("#A20062");
ShotgunCannonPlasma.trailEffect = ShotgunCannonPlasmaTrail;
ShotgunCannonPlasma.shootEffect = Fx.none;
ShotgunCannonPlasma.smokeEffect = Fx.none;
ShotgunCannonPlasma.scaleVelocity = false;
ShotgunCannonPlasma.hittable = false;
ShotgunCannonPlasma.absorbable = false;
ShotgunCannonPlasma.reflectable = false;
ShotgunCannonPlasma.splashDamage = 900000000;
ShotgunCannonPlasma.splashDamageRadius = 20000000;
ShotgunCannonPlasma.lightRadius = 200;
ShotgunCannonPlasma.lightOpacity = 1.5;
ShotgunCannonPlasma.shrinkY = 0;
ShotgunCannonPlasma.hitShake = 20;
ShotgunCannonPlasma.hitEffect = ShotgunCannonPlasmaExplosion;
ShotgunCannonPlasma.despawnEffect = Fx.none;
ShotgunCannonPlasma.lightningLength = 40;
ShotgunCannonPlasma.lightningDamage = 400000000;
ShotgunCannonPlasma.lightningLengthRand = 40;
ShotgunCannonPlasma.lightning = 14;
ShotgunCannonPlasma.pierce = false;
ShotgunCannonPlasma.sprite = "green-fortress-EndBullet";
ShotgunCannonPlasma.homingPower = 0;
ShotgunCannonPlasma.homingRange = 0;
ShotgunCannonPlasma.fragBullets = 100;
ShotgunCannonPlasma.fragVelocityMin = 0.7;
ShotgunCannonPlasma.fragVelocityMax = 9;
ShotgunCannonPlasma.fragLifeMin = 0.75;
ShotgunCannonPlasma.fragLifeMax = 1.375;
ShotgunCannonPlasma.status = StatusEffects.shocked;
ShotgunCannonPlasma.statusDuration = 300;
ShotgunCannonPlasma.hitSound = loadSound("stringsolid");
ShotgunCannonPlasma.fragBullet = ShotgunCannonPlasmaFrag;
const ShotgunCannonTurret = extendContent(PowerTurret, "ShotgunCannon", {
	
	icons: function(){
		return [
			Core.atlas.find("green-fortress-ShotgunCannon-icon-base"),
			Core.atlas.find("green-fortress-ShotgunCannon-icon")
		];
	},
});
ShotgunCannonTurret.chargeEffect = ShotgunCannonCharge;
ShotgunCannonTurret.shootEffect = ShotgunCannonShoot;
ShotgunCannonTurret.shootType = ShotgunCannonPlasma;
ShotgunCannonTurret.consumes.add(new ConsumeLiquidFilter(boolf(liquid=>liquid.temperature<=0.5&&liquid.flammability<0.1&&liquid.heatCapacity>0.5), 0.375)).update(false).boost();
//ShotgunCannonTurret.shootSound = Sounds.ShotgunCannonfire;
