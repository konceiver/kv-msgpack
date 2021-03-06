import { complianceTestsAsync } from "@konceiver/kv-test-suite";
import { tmpdir } from "os";

import { StoreAsync } from "./async";

complianceTestsAsync(
	() => StoreAsync.new<string, string>(`${tmpdir()}/kkv.msgpack`),
	{
		key1: "value1",
		key2: "value2",
		key3: "value3",
		key4: "value4",
		key5: "value5",
	}
);
