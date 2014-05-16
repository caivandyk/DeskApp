<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=5">

    <title>Ext JS 3 Desktop + Ext JS 4 Charts</title>

    <link rel="stylesheet" type="text/css" href="../../deploy/dev/resources/css/ext-all.css">
    <link rel="stylesheet" type="text/css" href="../../css/desktop.css">
	
	
    <link rel="stylesheet" type="text/css" href="../../resources/css/ext-sandbox.css">

    <!-- GC -->
	
    <script type="text/javascript" src="../../deploy/dev/adapter/ext/ext-base-debug.js"></script>
	<!-- ENDLIBS -->

    <script type="text/javascript" src="../../deploy/dev/ext-all-debug.js"></script><!-- DESKTOP -->
    <script type="text/javascript" src="../../Ext.Js/Modules/Data/Data.js"></script>  

    <script type="text/javascript" src="../../Ext.Js/StartMenu.js"></script>
    <script type="text/javascript" src="../../Ext.Js/TaskBar.js"></script>
    <script type="text/javascript" src="../../Ext.Js/Desktop.js"></script>
    <script type="text/javascript" src="../../Ext.Js/App.js"></script>
    <script type="text/javascript" src="../../Ext.Js/Module.js"></script>
   <%-- <script type="text/javascript" src="../../sample.js"></script>    --%> 
    <script type="text/javascript" src="../../Ext.Js/Modules/Core/Extjs.Core.js"></script>
    
    <script type="text/javascript" src="../../builds/ext-all-sandbox.js"></script>
    <script type="text/javascript" src="../../sandbox.js"></script>  
	
	<style type="text/css">
		table.sample {
			border-width: 2px;
			border-spacing: 1px;
			border-style: outset;
			border-color: gray;
			border-collapse: separate;			
		}
		table.sample th {
			border-width: 1px;
			padding: 1px;
			border-style: inset;
			border-color: gray;			
		}
		table.sample td {
			border-width: 1px;
			padding: 1px;
			border-style: inset;
			border-color: gray;
		}
</style>

<script type="text/javascript">

    var MyDesktop = new Object();

    Ext.onReady(function () {

        Ext.loadLibrary("../../sample.js");
   
    });

</script>
	
	
</head>

<body scroll="no">

    <div id="x-desktop">
	<dl id="x-shortcuts">
		<table id="icondesktop" class="sampleXX">
			<tr>
				<td>
					 <dt id="grid-win-shortcut">
					<a href="#"><img src="../../images/s.gif" />
					<div>Grid Windoww</div></a>
					</dt>
				</td>
				<td>
					 <dt id="acc-win-shortcut">
					<a href="#"><img src="../../images/s.gif" />
					<div>Accordion Window</div></a>
					</dt>
				</td>		
			</tr>
			<tr>
				<td>
					<dt id="chart-win-shortcut">
					<a href="#"><img src="../../images/chart48x48.png" />
					<div>Charts</div></a>
					</dt>
				</td>
				<td>
					 <dt id="FieldTypes-shortcut">
					<a href="#"><img src="../../images/form48.jpg" />
					<div>Field Types</div></a>
					</dt>	
				</td>		
			</tr>
			

            <tr>
				<td>
					<dt id="FormTestLoad-shortcut">
					<a href="#"><img src="../../images/form48.jpg" />
					<div>Dynamic test</div></a>
					</dt>
				</td>
				<td>
					
				</td>		
			</tr>
			


		</table>
	</dl>		
    </div>

    <div id="ux-taskbar">
        <div id="ux-taskbar-start"></div>
        <div id="ux-taskbuttons-panel"></div>
        <div class="x-clear"></div>
    </div>

</body>
</html>
