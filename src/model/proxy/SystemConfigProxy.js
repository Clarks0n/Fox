/**
 * Created by admin on 2016/3/14.
 */
puremvc.define({
        name: 'Slots.SystemConfigProxy',
        parent: puremvc.Proxy,
        constructor: function () {
            puremvc.Proxy.call(this);
        }
    },

    // INSTANCE MEMBERS
    {
        timer:null,
        my:this,
        onRegister: function() {

        },
        init:function(){
//          var self = this;
//          self.timer = setInterval(function(){
//	                self.pingServer();
//
//	        },300*1000);
            AppFacadeInstance.sendNotification(SlotsEvents.CHECK_LOGIN);
        },

        pingServer:function(){
            var req = new Object();
            req.action = "nuser.ping";
            req.callback = function(){};
            this.send2server(req);
        },

        send2server:function(obj,callback){
            var self = this;
            var header = new Object();
            header.st_s = AppConstants.SESSIONID;
            var req = new Object();
            req.header = header;
            req.params = JSON.stringify(obj);
            HttpConnection.send2server(req,function(rsp){
                self.onServerResponse(rsp,callback);
            });
        },

        onServerResponse:function(rsp,callback){

            if(rsp.httpCode!=200){
                if(rsp.httpCode==500){
                	if(this.timer){
                		 this.timer.clear();
                	}
                    this.init();
                }
                else{
                    this.processError(Alert.NETWORK_ERROR,-1,"network error");
                }
                return;
            }
            console.log(JSON.stringify(rsp));
            var data = rsp.msg;
            AppConstants.NOW = data.currTime;

            if(data.code!=0){

                var message = data.message;
                this.processError(Alert.NOMORL_ERROR,data.code,message);
                return true;
            }
            if(callback){
            	callback(data.content);
            }
        },
        processError:function(type,code,message){
            AppFacadeInstance.sendNotification(TexasEvents.HIDE_LOADING);
            var obj = new Object();
            obj.type = type;
            obj.code = code;
            obj.content = message;
            AppFacadeInstance.sendNotification(TexasEvents.SHOW_MESSAGE_WIN,obj);
        }
    },

    // CLASS MEMBERS
    {
        NAME: 'SystemConfigProxy'
    }
);
