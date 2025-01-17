var renderClass = "jp.ngt.rtm.render.RailPartsRenderer";
importPackage(Packages.org.lwjgl.opengl);
importPackage(Packages.jp.ngt.rtm.render);

function init(par1, par2)
{
	allParts = renderer.registerParts(new Parts("obj5", "obj7", "obj1"));
}


function renderRailStatic(tileEntity, posX, posY, posZ, par8, pass){
	renderer.renderStaticParts(tileEntity, posX, posY, posZ);
	}

function renderRailDynamic(tileEntity, posX, posY, posZ, par8, pass){}


function shouldRenderObject(tileEntity, objName, len, pos)
{
	if((pos % 15 != 0) && (objName === "obj7"))
	{
		return false;
	}
	else if((pos % 8 != 0) && (objName === "obj1"))
	{
		return false;
	}
	else if((pos % 8 == 0) && (objName === "obj5"))
	{
		return false;
	}
	return true;
}
