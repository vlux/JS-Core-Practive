import javax.script.*;
public class HelloScript{
    public static void main(String args[]){
        ScriptEngineManager manager = new ScriptEngineManager();
        ScriptEngine engine = manager.getEngineByName('javascript');
        try{
            engine.eval("print('hello world');");
        //动态地执行“字符串”
        //eval接受字符串，然后直接求值，也可以接受一个Reader对象，将一个脚本文件完整求值
        //还接受第二个参数以指定运行时的上下文对象，如果不指定，则按照全局上下文来求值
        }catch(ScriptException e){
            e.printStackTrace();
        }


        Person jack = new Person('jack',12);
        engine.put('jack',jack);
        try{
            engine.eval(new java.io.FileReader('script.js'));
        }catch(ScriptException e){
            e.printStackTrace();
        }catch(FileNotFoundException e){
            e.printStackTrace();
        }

        Invocable invEngine = (Invocable)engine;
        try{
            invEngine.invokeFunction('sayHello','jack');
        }catch(ScriptException e){
            e.printStackTrace();
        }catch(FileNotFoundException e){
            e.printStackTrace();
        }
    }
}


// 在JS中实现Java接口
// var task = new java.lang.Runnable(){
//     run:function(){
//         print('start')
//     }
// };
// var thread = new java.lang.Thread(task);
// thread.start();
