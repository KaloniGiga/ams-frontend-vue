<script setup>
import { Calendar } from '@/components/ui/calendar'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { useDateFormatter } from 'radix-vue'
import { CalendarDate, getLocalTimeZone, today } from '@internationalized/date'

const value = defineModel()
const placeholder = defineModel()

const df = new useDateFormatter('en-US', {
  dateStyle: 'long'
})
</script>
<template>
  <FormField>
    <FormItem>
      <FormLabel></FormLabel>
      <Popover>
        <PopoverTrigger as-child>
          <FormControl>
            <Button
              variant="outline"
              :class="
                cn('w-[240px] ps-3 text-start font-normal', !value && 'text-muted-foreground')
              "
            >
              <span>{{ value ? df.format(toDate(value)) : 'Pick a date' }}</span>
              <CalendarIcon class="ms-auto h-4 w-4 opacity-50" />
            </Button>
            <input hidden />
          </FormControl>
        </PopoverTrigger>
        <PopoverContent class="w-auto p-0">
          <Calendar
            v-model:placeholder="placeholder"
            v-model="value"
            calendar-label="Date of birth"
            initial-focus
            :min-value="new CalendarDate(1900, 1, 1)"
            :max-value="today(getLocalTimeZone())"
            @update:model-value="
              (v) => {
                if (v) {
                  setFieldValue('dob', v.toString())
                } else {
                  setFieldValue('dob', undefined)
                }
              }
            "
          />
        </PopoverContent>
      </Popover>
      <FormMessage />
    </FormItem>
  </FormField>
</template>
