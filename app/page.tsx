export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-center font-mono text-sm">
        <h1 className="text-4xl font-bold text-center mb-8">
          Ideas from: Voice-to-Code Generator
        </h1>
        <p className="text-xl text-center text-gray-600 mb-8">
          ```json
[
  {
    "title": "Voice-Driven Debugging Assistant",
    "description": "أداة تستخدم الأوامر الصوتية لمساعدة المطورين في تحديد الأخطاء في الشيفرة البرمجية وإصلاحها.",
    "mvp_plan": "إنشاء واجهة بسيطة تستقبل الأوامر الصوتية، وتربطها بأدوات تصحيح الأخطاء الشائعة مثل Chrome DevTools. يمكن استخدام مكتبات التعرف على الصوت مثل Google Speech API."
  },
  {
    "title": "Voice-Activated API Builder",
    "description": "أداة تسمح للمستخدمين بإنشاء واجهات برمجة التطبيقات (APIs) عبر الأوامر الصوتية، مما يسهل على المطورين إنشاء خدمات جديدة بسرعة.",
    "mvp_plan": "تطوير واجهة مستخدم بسيطة مع نظام التعرف على الصوت، حيث يمكن للمستخدمين إدخال تفاصيل API المطلوبة، مثل النقاط النهائية والطرق، وتحويلها إلى شيفرة باستخدام مكتبات مثل Express.js."
  },
  {
    "title": "Voice-Enabled Code Review Tool",
    "description": "أداة تتيح للمطورين إجراء مراجعات للكود باستخدام الأوامر الصوتية، مما يسهل التواصل بين الفرق.",
    "mvp_plan": "إنشاء منصة بسيطة تسمح للمستخدمين بإدخال تعليقات على الشيفرة البرمجية عبر الصوت، مع إمكانية دمجها مع أدوات مثل GitHub لتسهيل عملية المراجعة."
  }
]
```
        </p>
        <div className="flex justify-center space-x-4">
          <a 
            href="/auth" 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Get Started
          </a>
          <a 
            href="/dashboard" 
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          >
            Dashboard
          </a>
        </div>
      </div>
    </main>
  )
}