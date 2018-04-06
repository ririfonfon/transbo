
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
PrototypeC setPORTS(portIN.i, portOUT.i)
PrototypeC setSUBNET(sub.i)
PrototypeC startNODE()
PrototypeC stopNODE()
PrototypeC restartNODE()
PrototypeC getDMX(channel.i)
PrototypeC sendDMX(channel.i, value.i)

;LOAD LIBRARY
#Library = 1
If (OpenLibrary(#Library, "mgr-artnet-r512.dll")) 
Else
  Debug "failed to open library"
  End
EndIf

Global setPORTS.setPORTS
Global setSUBNET.setSUBNET
Global startNODE.startNODE
Global stopNODE.stopNODE
Global restartNODE.restartNODE
Global getDMX.getDMX
Global sendDMX.sendDMX


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
setPORTS(0,1)

;SET SUBNET   par defaut : 0
setSUBNET(0)

;START NODE
startNODE()
Debug "start node 4 6"

Procedure.l ArtNetOut(Codeur.l, CodeurValue.l)
  
  Shared Codeur_CodeurValues()
  
  If Codeur < 1 Or Codeur > #MaxMidiCodeur+1
    Debug "error checking CC number Codeur"
    ProcedureReturn #False
  EndIf
  Codeur_CodeurValues(Codeur) = Int((CodeurValue / 127)*255)
  
  If Codeur <> 0
    If sendDmx(Codeur,Codeur_CodeurValues(Codeur)) > 0
      Debug "Error sendDmx"
      ProcedureReturn #False
    Else
      sendDmx(Codeur, Codeur_CodeurValues(Codeur))
      Debug ">>>>> sendDmx = Codeur n° "+Codeur+" AT = "+Codeur_CodeurValues(Codeur)
      ProcedureReturn #True : Debug " return process true"
    EndIf
  EndIf
  Debug "error ,findmxsend"
  ProcedureReturn #False : Debug " return process false"
EndProcedure

Procedure.l ArtNetbtnOut(Ch.l, Val.l)
  
  Shared Ch_Val()
  
  Ch_Val(Ch) = Int((Val / 127)*255)
  
  If Ch <> 0
    If sendDmx(Ch+16,Ch_Val(Ch)) > 0
      Debug "Error btn sendDmx"
      ProcedureReturn #False
    Else
      sendDmx(Ch+16, Ch_Val(Ch))
      Debug ">>>>> sendDmxbtn = Ch n° "+Ch+16+" AT = "+Ch_Val(Ch)
      ProcedureReturn #True : Debug " return process btn true"
    EndIf
  EndIf
  Debug "error ,findmxsendbtn"
  ProcedureReturn #False : Debug " return process btn false"
EndProcedure
; IDE Options = PureBasic 5.62 (Windows - x86)
; CursorPosition = 92
; FirstLine = 29
; Folding = -
; EnableXP
; Executable = MGRartnet.exe
; EnableUnicode