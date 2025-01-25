import { createApp, h } from 'vue';
import BaseAlert from '@/components/BaseAlert.vue';

export function openAlert(options) {
  return new Promise((resolve) => {
    const { title, message, buttonText } = options;

    const div = document.createElement('div');
    document.body.appendChild(div);

    const app = createApp({
      render() {
        return h(BaseAlert, {
          title,
          message,
          buttonText,
          onClose: () => {
            app.unmount();
            document.body.removeChild(div);
            resolve();
          },
        });
      },
    });

    app.mount(div);
  });
}
