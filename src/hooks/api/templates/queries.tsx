import { useMutation } from '@tanstack/react-query';
import { apiRequest } from '@/config/request';
import type { TCircleTemplate } from './types';
import { LocalStorageKey } from '@/const';
import { createNotification } from '@/components/notifications';

interface UpdateCircleTemplateResponse {
  data: TCircleTemplate;
}

interface UpdateCircleTemplateVariables {
  data: TCircleTemplate;
}

const updateCircleTemplate = async (variables: UpdateCircleTemplateVariables) => {
  const circleid = localStorage.getItem(LocalStorageKey.CURRENT_ACTIVE_CIRCLE);
  if (!circleid) {
    throw new Error('No active circle found');
  }

  const response = await apiRequest.put<UpdateCircleTemplateResponse>(`circles/${circleid}/template`, {
    published_at:new Date().toISOString(),
    template:variables.data
  });
  return response.data;
};

export const useUpdateCircleTemplate = () => {
 return useMutation<UpdateCircleTemplateResponse, Error, UpdateCircleTemplateVariables>({
    mutationFn: updateCircleTemplate,
    onSuccess: () => {
      createNotification({
        type: 'success',
        title: 'Template Updated',
        text: 'The circle template has been successfully updated.',
      });
    }
  });
};