
Value1= 0
Value2 = 0
Value3 = 0
Value4 = 0
Value5 = 0
Value6 = 0
Value7 = 0
Value8 = 0
Value9 = 0
Value10 = 0
Value11 = 0
Value12 = 0
Value13 = 0
Value14 = 0
Value15 = 0
Value16 = 0

Value_last1 = 1
Value_last2 = 1
Value_last3 = 1
Value_last4 = 1
Value_last5 = 1
Value_last6 = 1
Value_last7 = 1
Value_last8 = 1
Value_last9 = 1
Value_last10 = 1
Value_last11 = 1
Value_last12 = 1
Value_last13 = 1
Value_last14 = 1
Value_last15 = 1
Value_last16 = 1


;LOCAL PROCEDURE
Prototype setPORTS(portIN.i, portOUT.i)
Prototype setSUBNET(sub.i)
Prototype startNODE()
Prototype stopNODE()
Prototype restartNODE()
Prototype getDMX(channel.i)
Prototype sendDMX(channel.i, value.i)

;LOAD LIBRARY
#Library = 1
If (OpenLibrary(#Library, "mgr-artnet-r512.dll")) 
Else
  Debug "failed to open library"
  End
EndIf

;LOAD FUNCTION FROM DLL INTO PUREBASIC PROCEDURE
setPORTS.setPORTS = GetFunction(#Library, "setPORTS") 
setSUBNET.setSUBNET = GetFunction(#Library, "setSUBNET") 
startNODE.startNODE = GetFunction(#Library, "startNODE") 
stopNODE.stopNODE = GetFunction(#Library, "stopNODE")
restartNODE.restartNODE = GetFunction(#Library, "restartNODE")
getDMX.getDMX = GetFunction(#Library, "getDMX") 
sendDMX.sendDMX = GetFunction(#Library, "sendDMX") 


If (startNODE > 0) 
Else 
  Debug "failed to locate startINPUT in the DLL"
  End
EndIf 

If (stopNODE > 0) 
Else 
  Debug "failed to locate stopINPUT in the DLL"
  End
EndIf 

If (getDMX > 0)
Else 
  Debug "failed to locate getDMX function in DLL"
  End
EndIf


;SET PORTS  (INPUT, OUTPUT)  par defaut: 0 / 1
setPORTS(4,6)

;SET SUBNET   par defaut : 0
setSUBNET(0)

;START NODE
startNODE()

; IDE Options = PureBasic 5.62 (Windows - x86)
; CursorPosition = 16
; EnableXP
; Executable = MGRartnet.exe
; EnableUnicode